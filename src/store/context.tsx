import React from 'react';
import { useStorage } from '@/hooks';
import { useStoreReducer } from './reducer';
import { createRandomId, objectKeys } from '@/utils';
import { ACCENT, App, DIR, LANGUAGE, MODE } from '@/types';

const StoreStateContext = React.createContext(
  {} as ReturnType<typeof useStoreReducer<App.Store>>[0]
);

const StoreDispatchContext = React.createContext(
  {} as ReturnType<typeof useStoreReducer<App.Store>>[1]
);

const rootAttributes = {
  accent: 'data-prefers-accent',
  mode: 'data-prefers-mode',
  dir: 'data-prefers-dir',
};

const initialStore: App.Store = {
  nonce: () => '',
  accent: ACCENT.blue,
  lang: LANGUAGE.en,
  mode: MODE.dark,
  dir: DIR.ltr,
};

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
    const root = document.getElementById('root')!;
    const attributes = objectKeys(rootAttributes);

    attributes.forEach((key) => {
      root.setAttribute(rootAttributes[key], store[key]);
    });
    console.log(store);
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
