import * as React from 'react';
import { TileContextValue } from './types';

export const TileGroupContext = React.createContext({} as TileContextValue);
export const TileGroupProvider = TileGroupContext.Provider;
export const useTileGroupContext = () => React.useContext(TileGroupContext);
