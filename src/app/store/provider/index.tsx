import React from 'react';
import { useStorage } from '../storage';
import { Store, Theme } from '@/types';
import { createRandomId } from '@/utils';
import { useStoreReducer } from '../reducer';
import { StoreDispatchContext, StoreStateContext } from '../context';

const initialStore: Store.State = {
  nonce: () => '',
  accent: 'blue',
  icons: 'outline',
  mode: 'dark',
  lang: 'en',
  dir: 'ltr',
};

const THEME_ROOT_ATTRIBUTES: Record<Theme.Attributes, string> = {
  accent: 'data-prefers-accent',
  mode: 'data-prefers-mode',
  dir: 'data-prefers-dir',
};

const StoreProvider = ({ children }: Store.ProviderProps) => {
  const local = useStorage<Store.LocalState>({ key: 'local-storage' });
  const session = useStorage<Store.SessionState>({ key: 'session-storage' });

  const [store, dispatch] = useStoreReducer<Store.State>(initialStore, (current) => {
    const localStore = local.fetch();
    const sessionStore = session.fetch();

    if (!sessionStore?.session) {
      const uid = createRandomId(16);
      session.write({ session: uid });
      return {
        ...current,
        session: uid,
      };
    }

    if (!localStore) {
      local.write({
        accent: store.accent,
        mode: store.mode,
        lang: store.lang,
        dir: store.dir,
      });

      const payload = local.fetch()!;

      return {
        ...current,
        ...payload,
      };
    }

    return {
      ...current,
      ...(local.fetch() ? local.fetch() : {}),
    };
  });

  React.useEffect(() => {
    local.write({
      accent: store.accent,
      mode: store.mode,
      lang: store.lang,
      dir: store.dir,
    });
  }, [store.accent, store.mode, store.lang, store.dir]);

  React.useEffect(() => {
    const root = document.getElementById('root')!;

    (Object.keys(THEME_ROOT_ATTRIBUTES) as Theme.Attributes[]).forEach((attribute) => {
      root.setAttribute(THEME_ROOT_ATTRIBUTES[attribute], store[attribute]);
    });
  }, [store.dir, store.mode, store.accent]);

  return (
    <StoreStateContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>
        <React.Fragment>{children}</React.Fragment>
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
};

export { StoreProvider };
