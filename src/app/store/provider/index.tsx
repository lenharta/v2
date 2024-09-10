import * as React from 'react';
import { useStorage } from '@/hooks';
import { Store, Theme } from '@/types';
import { createRandomString, objectKeys } from '@/utils';
import { DispatchContext, StoreContext } from '../context';
import { DEFAULT_STORE, THEME_ATTRIBUTE_MAP } from '../constants';

export interface StoreProviderProps {
  children: React.ReactNode;
}

export function useThemeUpdate(props: {
  theme: Theme.State;
  middleware: Store.Middleware<Theme.State>;
}) {
  const { theme, middleware } = props;

  React.useEffect(() => {
    const root = document.getElementsByTagName('html')[0]!;

    middleware.write(theme);

    objectKeys(THEME_ATTRIBUTE_MAP).forEach((attr) => {
      root.setAttribute(THEME_ATTRIBUTE_MAP[attr], theme[attr]);
    });
  }, [theme, middleware]);
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const local = useStorage<Theme.State>({ type: 'localStorage' });
  const session = useStorage<{ session: string }>({ type: 'sessionStorage' });

  const reducer = (current: Store.State, update: Partial<Store.State>) => ({
    ...current,
    ...update,
  });

  const initializer = (current: Store.State): Store.State => {
    if (!local.read()) {
      local.write({
        dir: current.dir,
        mode: current.mode,
        icons: current.icons,
        accent: current.accent,
        contrast: current.contrast,
      });
    }

    if (!session.read()) {
      const uid = createRandomString(16);
      session.write({ session: uid });
      return {
        ...current,
        ...(!local.fetch() ? {} : local.fetch()),
        session: uid,
      };
    }

    return {
      ...current,
      ...(!local.fetch() ? {} : local.fetch()),
    };
  };

  const [store, dispatch] = React.useReducer(reducer, DEFAULT_STORE, initializer);

  useThemeUpdate({
    middleware: local,
    theme: {
      dir: store.dir,
      mode: store.mode,
      icons: store.icons,
      accent: store.accent,
      contrast: store.contrast,
    },
  });

  return (
    <StoreContext.Provider value={store}>
      <DispatchContext.Provider value={dispatch}>
        <React.Fragment>{children}</React.Fragment>
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
