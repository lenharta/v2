import React from 'react';
import { SelectContextValue } from '../select-types';

const SelectContext = React.createContext({} as SelectContextValue);
const SelectProvider = SelectContext.Provider;
const useSelectContext = () => React.useContext(SelectContext);

export { SelectContext, SelectProvider, useSelectContext };
