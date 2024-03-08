import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useSession } from '@/hooks';
import { StoreState } from '@/types/store';
import { useStoreReducer, StoreStateProvider, StoreDispatchProvider } from './context';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const INITIAL_STATE: StoreState = {
    nonce: () => '',
  };
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
