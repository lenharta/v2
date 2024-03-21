import * as React from 'react';
import { TabsContextValue } from './types';

export const TabsContext = React.createContext({} as TabsContextValue);
export const TabsProvider = TabsContext.Provider;
export const useTabsCTX = () => React.useContext(TabsContext);
