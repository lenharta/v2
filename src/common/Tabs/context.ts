import * as React from 'react';
import { Align, Justify, Orientation, Size } from '@/types/common';

export type TabsVariant = 'default' | 'outline' | 'pill';
export type TabsPlacement = 'above' | 'below' | 'left' | 'right';

export type TabsContextValue = {
  size?: Size;
  align?: Align;
  justify?: Justify;
  readOnly?: boolean;
  disabled?: boolean;
  orientation?: Orientation;
  placement?: TabsPlacement;
  variant?: TabsVariant;
};

export const TabsContext = React.createContext({} as TabsContextValue);
export const TabsProvider = TabsContext.Provider;
export const useTabsContext = () => React.useContext(TabsContext);
