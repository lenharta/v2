import * as React from 'react';

export interface DropdownContextValue {
  isOpen?: boolean;
  disabled?: boolean;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
  onOpen?(): void;
  targetRef?: React.RefObject<HTMLElement>;
  boxRef?: React.RefObject<HTMLDivElement>;
  // x: number;
  // y: number;
  // getBoxId: () => string;
  // getTargetId: () => string;
}

export interface DropdownProps {
  isOpen?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onChange?(isOpen: boolean): void;
  onClose?(): void;
  onOpen?(): void;
}

export interface DropdownBoxProps {
  children?: React.ReactNode;
}

type DropdownTargetBaseProps = React.AllHTMLAttributes<HTMLElement>;

export interface DropdownTargetProps extends DropdownTargetBaseProps {
  children: React.ReactElement;
}

export const DropdownContext = React.createContext({} as DropdownContextValue);
export const DropdownProvider = DropdownContext.Provider;
export const useDropdownCTX = () => React.useContext(DropdownContext);
