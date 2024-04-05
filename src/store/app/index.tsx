import * as React from 'react';
import { Store } from '@/types';
import { localMiddleware } from '../local';
import { generateRandomId } from '@/utils';

export const AppStateContext = React.createContext({} as Store.AppState);
export const AppDispatchContext = React.createContext({} as Store.AppDispatch);

export const AppStateProvider = AppStateContext.Provider;
export const AppDispatchProvider = AppDispatchContext.Provider;

export const useAppState = () => React.useContext(AppStateContext);
export const useAppDispatch = () => React.useContext(AppDispatchContext);

const initialState: Store.AppState = {};

export const AppProvider = ({ children }: Store.ProviderProps) => {
  const reducer = (state: Store.AppState, update: Partial<Store.AppState>) => ({
    ...state,
    ...update,
  });

  const middleware = localMiddleware<Store.AppState>('session');

  const connectSession = () => {
    const connection = { sessionKey: generateRandomId(16) };
    middleware.write(connection);
    return connection;
  };

  const initializer = (current: Store.AppState) => {
    if (!middleware.fetch()?.sessionKey) {
      return {
        ...current,
        ...connectSession(),
      };
    }
    return current;
  };

  const [state, dispatch] = React.useReducer(reducer, initialState, initializer);

  return (
    <AppStateProvider value={state}>
      <AppDispatchProvider value={dispatch}>{children}</AppDispatchProvider>
    </AppStateProvider>
  );
};
