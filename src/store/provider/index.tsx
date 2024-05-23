import React from 'react';
import { App } from '@/types';
import { useStorage } from '@/hooks';
import { StoreStateContext } from '@/store/context/state';
import { StoreDispatchContext } from '@/store/context/dispatch';
import { createRandomId, objectKeys } from '@/utils';
import { lookupThemeAttributes, initialStore } from '@/store/constants';

function StoreProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const storage = useStorage<App.LocalStore>({ type: 'local' });

  const reducer = (state: App.Store, update: Partial<App.Store>) => ({
    ...state,
    ...update,
  });

  const [store, dispatch] = React.useReducer(reducer, initialStore, (current) => {
    const localStore = storage.fetch();

    let localPayload: App.LocalStore = {
      dir: current.dir,
      mode: current.mode,
      lang: current.lang,
      accent: current.accent,
    };

    if (!current.session && !localStore?.session) {
      const key = createRandomId(16);
      storage.write({ ...localPayload, session: key });

      return {
        ...current,
        ...localStore,
        session: key,
      };
    }

    return {
      ...current,
      ...localStore,
    };
  });

  React.useEffect(() => {
    storage.write({
      dir: store.dir,
      mode: store.mode,
      lang: store.lang,
      accent: store.accent,
      session: store.session,
    });
  }, [store.dir, store.mode, store.lang, store.accent, store.session]);

  React.useEffect(() => {
    const rootElement = document.getElementsByTagName('html')[0]!;

    objectKeys(lookupThemeAttributes).forEach((key) => {
      rootElement.setAttribute(lookupThemeAttributes[key], store[key]);
    });
  }, [store.dir, store.mode, store.accent]);

  return (
    <StoreStateContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>
        <React.Fragment>{children}</React.Fragment>
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
}

export { StoreProvider };
