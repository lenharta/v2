import React from 'react';
import { App } from '@/types';
import { useStorage } from '@/hooks';
import { useStoreReducer } from '@/store/hooks';
import { StoreStateContext } from '@/store/context/state';
import { StoreDispatchContext } from '@/store/context/dispatch';
import { createRandomId, objectKeys } from '@/utils';
import { lookupThemeAttributes, initialStore } from '@/store/constants';

function StoreProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const storage = useStorage({ type: 'local' });

  const [store, dispatch] = useStoreReducer(initialStore);

  React.useEffect(() => {
    const createSession = () => {
      if (!store.session) {
        const key = createRandomId(16);
        storage.write({ session: key });
        dispatch({ session: key } as App.Store);
      }
    };

    void createSession();
  }, []);

  React.useEffect(() => {
    const rootElement = document.getElementsByTagName('html')[0]!;

    objectKeys(lookupThemeAttributes).forEach((key) => {
      rootElement.setAttribute(lookupThemeAttributes[key], store[key]);
    });
  }, [store]);

  return (
    <StoreStateContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>
        <React.Fragment>{children}</React.Fragment>
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
}

export { StoreProvider };
