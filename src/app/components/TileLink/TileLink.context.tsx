import * as React from 'react';
import { TileLinkContextValue } from './TileLink.types';

const TileLinkContext = React.createContext({} as TileLinkContextValue);
const TileLinkProvider = TileLinkContext.Provider;
const useTileLinkContext = () => React.useContext(TileLinkContext);

export { TileLinkContext, TileLinkProvider, useTileLinkContext };
