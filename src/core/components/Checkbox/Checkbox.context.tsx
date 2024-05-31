import React from 'react';
import { CheckboxContext } from './Checkbox.types';

const CheckboxGroupContext = React.createContext({} as CheckboxContext);
const CheckboxGroupProvider = CheckboxGroupContext.Provider;
const useCheckboxContext = () => React.useContext(CheckboxGroupContext);

export { CheckboxGroupProvider, useCheckboxContext };
