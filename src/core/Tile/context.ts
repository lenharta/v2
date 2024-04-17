import * as React from 'react';
import { Core } from '@/types';

export interface TileContextValue {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
  /** Specifies the interaction variant for the element */
  variant?: 'default' | 'clickable' | 'selectable' | 'expandable';
  /** Indicates a `disabled` state for the element. */
  disabled?: boolean | undefined;
}

export const TileContext = React.createContext({} as TileContextValue);
export const TileProvider = TileContext.Provider;
export const useTileContext = () => React.useContext(TileContext);
