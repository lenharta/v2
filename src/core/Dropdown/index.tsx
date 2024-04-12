import React from 'react';
import { Floating } from '@/types';

interface DropdownContextValue {
  x: number;
  y: number;
  middleware: Floating.Middleware;
  onChange?: ((opened: boolean) => void) | (() => void) | undefined;
}

export const DropdownContext = React.createContext({} as DropdownContextValue);
export const DropdownProvider = DropdownContext.Provider;

interface DropdownProps {
  width?: 'target' | string | number | undefined;
  children?: React.ReactNode | undefined;
  middleware?: Floating.Middleware | undefined;
  onOpen?: (() => void) | undefined;
  onClose?: (() => void) | undefined;
  onChange?: ((opened: boolean) => void) | (() => void) | undefined;
}

type DropdownComponent = React.FC<DropdownProps> & {};

export const Dropdown: DropdownComponent = (props) => {
  const {
    width = 'max-content',
    middleware = { flip: true, shift: true, inline: false },
    onOpen,
    onClose,
    onChange,
    children,
  } = props;

  return (
    <DropdownProvider value={{ x: 0, y: 0, middleware, onChange }}>
      <React.Fragment>{children}</React.Fragment>
    </DropdownProvider>
  );
};
