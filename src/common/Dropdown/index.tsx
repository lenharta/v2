import * as React from 'react';
import { useScrollPosition } from '@/hooks';
import { DropdownProps, DropdownProvider } from './context';
import { DropdownTarget } from './Target';
import { DropdownBox } from './Box';

export type DropdownComponent = React.FC<DropdownProps> & {
  Target: typeof DropdownTarget;
  Box: typeof DropdownBox;
};

export function useLatestRef<T>(value: T) {
  const ref = React.useRef<T>(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref;
}

export const Dropdown: DropdownComponent = (props) => {
  const { children, disabled, isOpen, onClose, onOpen, onChange } = props;

  const targetRef = React.useRef<HTMLElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [position] = useScrollPosition();

  const latest = useLatestRef(position);

  React.useEffect(() => {
    const boxNode = boxRef.current!;
    const targetNode = targetRef.current!;

    if (boxNode && targetNode) {
      console.log(latest.current);
      console.log(position);
    }
  }, [position]);

  return (
    <DropdownProvider value={{ disabled, isOpen, onClose, onOpen, onChange, boxRef, targetRef }}>
      {children}
    </DropdownProvider>
  );
};

Dropdown.displayName = '@v2/Dropdown';
Dropdown.Target = DropdownTarget;
Dropdown.Box = DropdownBox;
