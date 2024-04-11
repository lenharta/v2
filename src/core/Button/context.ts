import * as React from 'react';
import { Core } from '@/types';

export interface ButtonGroupContextValue {
  /** Specifies the size of the element. */
  size?: Core.Size5 | undefined;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal' | undefined;

  /** Indicates a `loading` state for the interactive element. */
  loading?: boolean | undefined;

  /** Indicates a `disabled` state for the interactive element. */
  disabled?: boolean | undefined;
}

export const ButtonGroupContext = React.createContext({} as ButtonGroupContextValue);
export const ButtonGroupProvider = ButtonGroupContext.Provider;
export const useButtonGroup = () => React.useContext(ButtonGroupContext);
