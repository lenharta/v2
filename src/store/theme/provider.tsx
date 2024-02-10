import * as React from 'react';
import { ThemeCTX } from './context';
import { type ThemeStore } from '@/types';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const STORAGE_KEY = 'theme-store';

  const storage = window.localStorage;

  const INITIAL_STATE: ThemeStore = {
    avatar: 'person',
    accent: 'blue',
    mode: 'dark',
  };

  const readValue = React.useCallback((): ThemeStore => {
    try {
      const raw = storage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : INITIAL_STATE;
    } catch (error: any) {
      console.log('[@v2/ThemeProvider]: Failed to update `mode` store.');
      return INITIAL_STATE;
    }
  }, []);

  const [store, dispatch] = React.useReducer(
    (current: ThemeStore, update: Partial<ThemeStore>) => ({
      ...current,
      ...update,
    }),
    INITIAL_STATE,
    readValue
  );

  const setMode = async (value: ThemeStore['mode']) => {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify({ ...store, mode: value }));
      dispatch({ mode: value });
    } catch (error: any) {
      console.log('[@v2/ThemeProvider]: Failed to update `mode` store.');
    }
  };

  const setAccent = async (value: ThemeStore['accent']) => {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify({ ...store, accent: value }));
      dispatch({ accent: value });
    } catch (error: any) {
      console.log('[@v2/ThemeProvider]: Failed to update `accent` store.');
    }
  };

  const setAvatar = async (value: ThemeStore['avatar']) => {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify({ ...store, avatar: value }));
      dispatch({ avatar: value });
    } catch (error: any) {
      console.log('[@v2/ThemeProvider]: Failed to update `avatar` store.');
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
