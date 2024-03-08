import * as React from 'react';

export interface DropdownContextValue {
  isOpen?: boolean;
  disabled?: boolean;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
  onOpen?(): void;
  targetRef?: React.RefObject<any>;
  boxRef?: React.RefObject<any>;
  // x: number;
  // y: number;
  // getBoxId: () => string;
  // getTargetId: () => string;S
}

export interface DropdownProps {
  isOpen?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
  onOpen?(): void;
}

export const DropdownContext = React.createContext({} as DropdownContextValue);
export const DropdownProvider = DropdownContext.Provider;
export const useDropdownCTX = () => React.useContext(DropdownContext);
