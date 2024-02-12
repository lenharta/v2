import React from 'react';

export type StoreState = {
  error?: string;
  loading?: boolean;
  sessionId?: string;
  isMenuOpen?: boolean;
  isToastOpen?: boolean;
};

export type Store = StoreState;
export type StoreDispatch = React.Dispatch<StoreState>;

export enum STORAGE_KEYS {
  SESSION_STORE_ID = 'session-id',
  LOCAL_STORE_THEME = 'local-theme',
}

export const INITIAL_STORE: Store = {};

export function useStoreReducer<T extends StoreState>(initialState: T, initializer: (arg: T) => T) {
  return React.useReducer(
    (current: T, update: T) => ({
      ...current,
      ...update,
    }),
    initialState,
    initializer
  );
}

export const StoreStateCTX = React.createContext({} as Store);
export const StoreDispatchCTX = React.createContext({} as React.Dispatch<Store>);

export const StoreStateProvider = StoreStateCTX.Provider;
export const StoreDispatchProvider = StoreDispatchCTX.Provider;

export const useStore = () => React.useContext(StoreStateCTX);
export const useStoreDispatch = () => React.useContext(StoreDispatchCTX);
