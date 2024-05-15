import React from 'react';

interface ToggleContextValue {}

interface ToggleProviderProps {
  children: React.ReactNode;
  value: ToggleContextValue;
}

const ToggleContext = React.createContext({} as ToggleContextValue);
const useToggleContext = () => React.useContext(ToggleContext);

const ToggleProvider = ({ children, value }: ToggleProviderProps) => (
  <ToggleContext.Provider value={value}>
    <React.Fragment>{children}</React.Fragment>
  </ToggleContext.Provider>
);

export { ToggleProvider, useToggleContext, type ToggleContextValue };
