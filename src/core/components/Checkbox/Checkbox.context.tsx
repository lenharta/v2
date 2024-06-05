import React from 'react';
import { CheckboxContext } from './types';

const CheckboxGroupContext = React.createContext({} as CheckboxContext);
const CheckboxProvider = CheckboxGroupContext.Provider;
const useCheckboxContext = () => React.useContext(CheckboxGroupContext);

export { CheckboxProvider, useCheckboxContext };
