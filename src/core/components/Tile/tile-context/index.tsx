import React from 'react';
import { TileContext } from '../tile-types';

const TileGroupContext = React.createContext({} as TileContext);
const TileProvider = TileGroupContext.Provider;
const useTileContext = () => React.useContext(TileGroupContext);

export { TileProvider, useTileContext };
