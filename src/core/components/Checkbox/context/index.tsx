import React from 'react';

interface CheckboxContextValue {}

interface CheckboxProviderProps {
  children: React.ReactNode;
  value: CheckboxContextValue;
}

const CheckboxContext = React.createContext({} as CheckboxContextValue);
const useCheckboxContext = () => React.useContext(CheckboxContext);

const CheckboxProvider = ({ children, value }: CheckboxProviderProps) => (
  <CheckboxContext.Provider value={value}>
    <React.Fragment>{children}</React.Fragment>
  </CheckboxContext.Provider>
);

export { CheckboxProvider, useCheckboxContext, type CheckboxContextValue };
