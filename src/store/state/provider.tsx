import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useSession } from '@/hooks';
import { StoreState } from '@/types/store';
import { StoreStateProvider, StoreDispatchProvider } from './context';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const location = useLocation();

  const [store, dispatch] = React.useReducer(
    (state: StoreState, update: Partial<StoreState>) => ({
      ...state,
      ...update,
    }),
    {
      nonce: () => '',
    }
  );

  React.useEffect(() => {
    if (!session.read()) {
      dispatch({ sessionKey: session.fetch()! });
      session.write();
    }
    dispatch({ sessionKey: session.fetch()!, location });
  }, [location]);

  return (
    <StoreDispatchProvider value={dispatch}>
      <StoreStateProvider value={store}>{children}</StoreStateProvider>
    </StoreDispatchProvider>
  );
};
