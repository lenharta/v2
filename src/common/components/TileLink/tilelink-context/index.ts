import React from 'react';
import { TileLinkContext } from '../tilelink-types';

const TileLinkGroupContext = React.createContext({} as TileLinkContext);
const TileLinkProvider = TileLinkGroupContext.Provider;
const useTileLinkContext = () => React.useContext(TileLinkGroupContext);

export { TileLinkProvider, useTileLinkContext };
