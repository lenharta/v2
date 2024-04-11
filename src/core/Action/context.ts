import * as React from 'react';
import { Core } from '@/types';

export interface ActionGroupContextValue {
  /** Specifies the size of the element. */
  size?: Core.Size5 | undefined;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal' | undefined;

  /** Indicates a `disabled` state for the interactive element. */
  disabled?: boolean | undefined;
}

export const ActionGroupContext = React.createContext({} as ActionGroupContextValue);
export const ActionGroupProvider = ActionGroupContext.Provider;
export const useActionGroup = () => React.useContext(ActionGroupContext);
