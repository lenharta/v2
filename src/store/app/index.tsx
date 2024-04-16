import * as React from 'react';
import { Store } from '@/types';
import { localMiddleware } from '@/store/local';
import { generateRandomId } from '@/utils';
import { initialAppState } from '../config';
import { useLocation } from 'react-router-dom';

export const AppStateContext = React.createContext({} as Store.AppContextValue);
export const AppDispatchContext = React.createContext({} as Store.AppDispatch);

export const AppStateProvider = AppStateContext.Provider;
export const AppDispatchProvider = AppDispatchContext.Provider;

export const useAppState = () => React.useContext(AppStateContext);
export const useAppDispatch = () => React.useContext(AppDispatchContext);

export const AppProvider = ({ children }: Store.ProviderProps) => {
  const reducer = (state: Store.AppState, update: Partial<Store.AppState>) => ({
    ...state,
    ...update,
  });

  const middleware = localMiddleware<Store.AppState>('session');
  const location = useLocation();

  const initializeState = (current: Store.AppState): Store.AppState => {
    const currentSession = middleware.fetch()?.sessionKey;

    if (!currentSession) {
      return {
        ...current,
        isSplash: true,
      };
    } else {
      return {
        ...current,
        sessionKey: middleware.fetch()?.sessionKey,
      };
    }

    // if (currentSession) {
    //   return {
    //     ...current,
    //     sessionKey: currentSession,
    //   };
    // } else {
    //   const newSession = generateRandomId(16);
    //   middleware.write({ ...current, sessionKey: newSession });
    //   return {
    //     ...current, isSplash: true, sessionKey: newSession,
    //   };
    // }
  };

  const [state, dispatch] = React.useReducer(reducer, initialAppState, initializeState);

  return (
    <AppStateProvider
      value={{
        ...state,
        location,
        middleware,
        nonce: () => '',
      }}
    >
      <AppDispatchProvider value={dispatch}>{children}</AppDispatchProvider>
    </AppStateProvider>
  );
};
