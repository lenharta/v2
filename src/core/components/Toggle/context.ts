import React from 'react';
import { ToggleContext } from './types';

const ToggleGroupContext = React.createContext({} as ToggleContext);
const ToggleProvider = ToggleGroupContext.Provider;
const useToggleContext = () => React.useContext(ToggleGroupContext);

export { ToggleGroupContext, ToggleProvider, useToggleContext };
