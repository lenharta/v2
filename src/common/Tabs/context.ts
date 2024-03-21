import * as React from 'react';
import { Orientation, SizeExpanded } from '@/types/common';

export type TabsContextValue = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  orientation?: Orientation;
  disabled?: boolean;
  size?: SizeExpanded;
};

export const TabsContext = React.createContext({} as TabsContextValue);
export const TabsProvider = TabsContext.Provider;
export const useTabsCTX = () => React.useContext(TabsContext);
