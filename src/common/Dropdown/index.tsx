import * as React from 'react';
import { DropdownProps, DropdownProvider } from './context';
import { DropdownTarget } from './Target';
import { DropdownBox } from './Box';

export interface DropdownComponent {
  (props: DropdownProps): JSX.Element | null;
  displayName?: string;
  Box: typeof DropdownBox;
  Target: typeof DropdownTarget;
}

export const Dropdown: DropdownComponent = (props) => {
  const { children, disabled, isOpen, onClose, onOpen, onOpenChange } = props;

  const boxRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLElement>(null);

  return (
    <DropdownProvider
      value={{ disabled, isOpen, onClose, onOpen, onOpenChange, boxRef, targetRef }}
    >
      {children}
    </DropdownProvider>
  );
};

Dropdown.displayName = '@v2/Dropdown';
Dropdown.Box = DropdownBox;
Dropdown.Target = DropdownTarget;
