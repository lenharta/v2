import React from 'react';
import { useSession } from '@/hooks';
import { useLocation } from 'react-router-dom';
import { useStoreReducer, StoreStateProvider, StoreDispatchProvider } from './context';
import { type StoreState } from '@/types/store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const INITIAL_STATE: StoreState = {};

  const session = useSession();
  const location = useLocation();

  const [store, dispatch] = useStoreReducer({}, () => INITIAL_STATE);

  React.useEffect(() => {
    const connect = () => {
      if (session.read()) {
        dispatch({ sessionId: session.fetch()! });
      }
    };
    void connect();
  }, [location]);

  return (
    <StoreDispatchProvider value={dispatch}>
      <StoreStateProvider value={store}>{children}</StoreStateProvider>
    </StoreDispatchProvider>
  );
};
