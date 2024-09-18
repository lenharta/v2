import * as React from 'react';
import { Core } from '@/types';

export const SwitchContext = React.createContext<Core.SwitchContext | null>(null);
export const SwitchProvider = SwitchContext.Provider;
export const useSwitchContext = () => React.useContext(SwitchContext);
