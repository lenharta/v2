import React from 'react';

interface RadioContextValue {}

interface RadioProviderProps {
  children: React.ReactNode;
  value: RadioContextValue;
}

const RadioContext = React.createContext({} as RadioContextValue);
const useRadioContext = () => React.useContext(RadioContext);

const RadioProvider = ({ children, value }: RadioProviderProps) => (
  <RadioContext.Provider value={value}>
    <React.Fragment>{children}</React.Fragment>
  </RadioContext.Provider>
);

export { RadioProvider, useRadioContext, type RadioContextValue };
