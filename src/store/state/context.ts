import * as React from 'react';
import { Store, StoreState } from '@/types/store';

export const INITIAL_STORE: Store = {
  pageX: 0,
  pageY: 0,
};

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
export const useDispatch = () => React.useContext(StoreDispatchCTX);
