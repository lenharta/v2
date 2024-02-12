import * as React from 'react';
import { ThemeCTX } from './context';
import { STORAGE_KEYS } from '../config';
import { localManager } from '../storage/local-manager';
import type { ThemeStore } from '@/types';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const local = localManager<ThemeStore>(STORAGE_KEYS.LOCAL_STORE_THEME);

  const INITIAL_STATE: ThemeStore = {
    avatar: 'person',
    accent: 'blue',
    mode: 'dark',
  };

  const readValue = React.useCallback(() => {
    const get = () => {
      try {
        const payload = local.fetch();
        return payload ? payload : INITIAL_STATE;
      } catch {
        console.error(
          `ERROR:[@v2/storage/local]: Check 'INITIALIZER' method @ ${STORAGE_KEYS.LOCAL_STORE_THEME}`
        );
        return INITIAL_STATE;
      }
    };
    return get();
  }, []);

  const [store, dispatch] = React.useReducer(
    (current: ThemeStore, update: ThemeStore) => ({
      ...current,
      ...update,
    }),
    INITIAL_STATE,
    readValue
  );

  const setMode = (value: ThemeStore['mode']) => {
    try {
      local.write({ ...store, mode: value });
      dispatch({ mode: value });
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/local]: Check 'SET-MODE' method @ ${value}`);
    }
  };

  const setAccent = (value: ThemeStore['accent']) => {
    try {
      local.write({ ...store, accent: value });
      dispatch({ accent: value });
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/local]: Check 'SET-ACCENT' method @ ${value}`);
    }
  };

  const setAvatar = (value: ThemeStore['avatar']) => {
    try {
      local.write({ ...store, avatar: value });
      dispatch({ avatar: value });
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/local]: Check 'SET-AVATAR' method @ ${value}`);
    }
  };

  React.useEffect(() => {
    const root = document.getElementById('root')!;
    root.setAttribute('data-prefers-color-scheme', String(store.mode));
  }, [store]);

  return (
    <ThemeCTX.Provider value={{ state: store, setMode, setAccent, setAvatar }}>
      {children}
    </ThemeCTX.Provider>
  );
};
