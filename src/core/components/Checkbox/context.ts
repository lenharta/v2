import * as React from 'react';
import { CheckboxContext } from './types';

const CheckboxGroupContext = React.createContext<CheckboxContext | null>(null);

const CheckboxGroupProvider = CheckboxGroupContext.Provider;

const useCheckboxContext = () => React.useContext(CheckboxGroupContext);

export { useCheckboxContext, CheckboxGroupContext, CheckboxGroupProvider };
