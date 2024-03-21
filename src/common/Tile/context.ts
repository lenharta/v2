import * as React from 'react';
import { TileContextValue } from './types';

export const TileContext = React.createContext({} as TileContextValue);
export const TileProvider = TileContext.Provider;
export const useTileCTX = () => React.useContext(TileContext);
