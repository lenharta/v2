import * as React from 'react';
import { Orientation, Size } from '@/types/common';

export type CheckboxScheme = 'default' | 'accent' | 'default-elevated' | 'accent-elevated';

export type CheckboxContextValue = {
  size?: Size;
  scheme?: CheckboxScheme;
  orientation?: Orientation;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  legend?: string;
  value?: string[];
};

export const CheckboxContext = React.createContext({} as CheckboxContextValue);
export const CheckboxProvider = CheckboxContext.Provider;
export const useCheckboxCTX = () => React.useContext(CheckboxContext);
