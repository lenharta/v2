import * as React from 'react';

export interface CheckboxContextValue {
  /** A string representing the `Checkbox.Group` value. */
  value: string[] | undefined;
  /** Defines legend for the `Checkbox.Group`. */
  groupId: string | undefined;
  /** Defines a change event handler for the `Checkbox.Group`. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Indicates a `disabled` state for the `Checkbox.Group`. */
  disabled?: boolean | undefined;
}

export const CheckboxContext = React.createContext({} as CheckboxContextValue);
export const CheckboxProvider = CheckboxContext.Provider;
export const useCheckboxContext = () => React.useContext(CheckboxContext);
