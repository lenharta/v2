import React from 'react';
import { useStorage } from '../storage';
import { Store, Theme } from '@/types';
import { createRandomString } from '@/utils';
import { useStoreReducer } from '../reducer';
import { StoreDispatchContext, StoreStateContext } from '../context';

const initialStore: Store.State = {
  dir: 'ltr',
  mode: 'dark',
  icons: 'outline',
  accent: 'blue',
  language: 'en',
  nonce: () => '',
};

const THEME_ATTRIBUTE_MAP = {
  accent: 'data-prefers-accent',
  mode: 'data-prefers-mode',
  dir: 'data-prefers-dir',
} as const;

const StoreProvider = ({ children }: { children?: React.ReactNode | undefined }) => {
  const local = useStorage<Store.LocalState>({ key: 'local-storage' });
  const session = useStorage<Store.SessionState>({ key: 'session-storage' });

  const [store, dispatch] = useStoreReducer<Store.State>(initialStore, (current) => {
    const localStore = local.fetch();
    const sessionStore = session.fetch();

    if (!sessionStore?.session) {
      const uid = createRandomString(16);
      session.write({ session: uid });
      return {
        ...current,
        session: uid,
      };
    }

    if (!localStore) {
      local.write({
        dir: store.dir,
        mode: store.mode,
        icons: store.icons,
        accent: store.accent,
        language: store.language,
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
      dir: store.dir,
      mode: store.mode,
      icons: store.icons,
      accent: store.accent,
      language: store.language,
    });
  }, [store.dir, store.mode, store.accent, store.icons, store.language]);

  React.useEffect(() => {
    const html = document.getElementsByTagName('html')[0]!;

    (Object.keys(THEME_ATTRIBUTE_MAP) as Theme.Attributes[]).forEach((attribute) => {
      html.setAttribute(THEME_ATTRIBUTE_MAP[attribute], store[attribute]);
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
