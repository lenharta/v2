import * as React from 'react';
import { Orientation } from '@/types/common';

export type CheckboxContextValue = {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?(event: React.FormEvent<HTMLButtonElement>): void;
  orientation?: Orientation;
};

export const CheckboxContext = React.createContext({} as CheckboxContextValue);
export const CheckboxProvider = CheckboxContext.Provider;
export const useCheckboxCTX = () => React.useContext(CheckboxContext);
