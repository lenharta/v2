import * as React from 'react';
import { DEMO } from '@/types';

export type DemoContextValue = {
  display: { state: DEMO.State; dispatch: (payload: Partial<DEMO.State>) => void };
  settings: { state: Record<string, any>; dispatch: (field: string, value: any) => void };
};

export const DemoContext = React.createContext({} as DemoContextValue);
export const DemoProvider = DemoContext.Provider;
export const useDemoContext = () => React.useContext(DemoContext);
