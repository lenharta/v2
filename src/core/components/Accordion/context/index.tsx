import React from 'react';

interface AccordionContextValue {}

const AccordionContext = React.createContext({} as AccordionContextValue);
const useAccordionContext = () => React.useContext(AccordionContext);

interface AccordionProviderProps {
  children: React.ReactNode;
  value: AccordionContextValue;
}

const AccordionProvider = (props: AccordionProviderProps) => {
  const { children, value } = props;
  return (
    <AccordionContext.Provider value={value}>
      <React.Fragment>{children}</React.Fragment>
    </AccordionContext.Provider>
  );
};

export { AccordionProvider, useAccordionContext, type AccordionContextValue };
