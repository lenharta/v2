import * as React from 'react';
import { DropdownProvider } from './context';
import { DropdownTarget } from './Target';
import { DropdownBox } from './Box';

export interface DropdownStateOptions {
  onOpen?: () => void;
  onClose?: () => void;
  initialOpen?: boolean;
}

export interface DropdownProps {
  onOpen?: () => void;
  onClose?: () => void;
  initialOpen?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

function useDropdownState(options: DropdownStateOptions): [boolean, (value: boolean) => void] {
  const { initialOpen, onOpen, onClose } = options;
  const [isOpen, setOpen] = React.useState(initialOpen || false);

  const onChange = React.useCallback(
    (value: boolean) => {
      if (isOpen) {
        onClose?.();
      } else {
        onOpen?.();
      }
      setOpen?.(value);
    },
    [isOpen, initialOpen, onOpen, onClose]
  );

  return [isOpen, onChange] as const;
}

export type DropdownComponent = ((props: DropdownProps) => JSX.Element) & {
  Target: typeof DropdownTarget;
  Box: typeof DropdownBox;
};

export const Dropdown = (props: DropdownProps) => {
  const { children, disabled, initialOpen, onOpen, onClose } = props;
  const [isOpen, onChange] = useDropdownState({ initialOpen, onOpen, onClose });

  const boxRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLElement>(null);

  return (
    <DropdownProvider value={{ disabled, isOpen, onChange, boxRef, targetRef }}>
      {children}
    </DropdownProvider>
  );
};

Dropdown.displayName = '@v2/Dropdown';
Dropdown.Target = DropdownTarget;
Dropdown.Box = DropdownBox;

//   const [position] = useScrollPosition();
//   React.useEffect(() => {
//     const boxNode = boxRef.current!;
//     const targetNode = targetRef.current!;
//     if (boxNode && targetNode) {
//       console.log(position);
//     }
//   }, [position]);
