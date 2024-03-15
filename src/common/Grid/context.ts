import * as React from 'react';

export type GridContextValue = {};

export const GridContext = React.createContext({} as GridContextValue);
export const GridProvider = GridContext.Provider;
export const useGridCTX = () => React.useContext(GridContext);
