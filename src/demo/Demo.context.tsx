import * as React from 'react';
import { DEMO } from '@/types';

export type DemoContextValue = {
  dispatch: (payload: Partial<DEMO.State>) => void;
  state: DEMO.State;
};

export const DemoContext = React.createContext({} as DemoContextValue);
export const DemoProvider = DemoContext.Provider;
export const useDemoContext = () => React.useContext(DemoContext);
