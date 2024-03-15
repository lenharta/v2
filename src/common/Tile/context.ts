import * as React from 'react';
import { Orientation, Scheme } from '@/types/common';

export type TileScheme = 'default' | Scheme;

export type TileContextValue = {
  orientation?: Orientation;
  scheme?: TileScheme;
};

export const TileContext = React.createContext({} as TileContextValue);
export const TileProvider = TileContext.Provider;
export const useTileCTX = () => React.useContext(TileContext);
