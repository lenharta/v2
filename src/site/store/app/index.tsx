import * as React from 'react';
import { AppDispatch, AppStore } from '../types';

export const AppContext = React.createContext({} as [AppStore, AppDispatch]);
export const useAppContext = () => React.useContext(AppContext);

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

  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};
