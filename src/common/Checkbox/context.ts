import * as React from 'react';
import { Orientation, Size } from '@/types/common';

export type CheckboxContextValue = {
  orientation?: Orientation;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  legend?: string;
  value: string[];
  size?: Size;
};

export const CheckboxContext = React.createContext({} as CheckboxContextValue);
export const CheckboxProvider = CheckboxContext.Provider;
export const useCheckboxCTX = () => React.useContext(CheckboxContext);
