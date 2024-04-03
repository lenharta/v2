import { AppDispatch, AppStore } from '@/types';
import * as React from 'react';

export const AppStateContext = React.createContext({} as AppStore);
export const AppDispatchContext = React.createContext({} as AppDispatch);
export const useAppState = () => React.useContext(AppStateContext);
export const useAppDispatch = () => React.useContext(AppDispatchContext);

const initialState: AppStore = {};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const reducer = (state: AppStore, update: Partial<AppStore>) => {
    return {
      ...state,
      ...update,
    };
  };

  const initializer = (current: AppStore) => current;

  const [state, dispatch] = React.useReducer(reducer, initialState, initializer);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
