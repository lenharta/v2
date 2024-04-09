import * as React from 'react';
import { Core } from '@/types';

export interface TileContextValue {
  /** Defines the interaction type of the element */
  type?: Core.InteractionType | undefined;
  scheme?: Core.Scheme | undefined;
  disabled?: boolean | undefined;
  clickable?: boolean | undefined;
  selectable?: boolean | undefined;
  expandable?: boolean | undefined;
  component?: React.ElementType | undefined;
}

export const TileContext = React.createContext({} as TileContextValue);
export const TileProvider = TileContext.Provider;
export const useTileContext = () => React.useContext(TileContext);
