import * as React from 'react';
import { type ThemeStore } from '@/types';
import { ThemeCTXProvider } from './context';
import { localStorageManager } from '../local/manager';

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const THEME_STORAGE_KEY = 'theme-storage';

  const INITIAL_THEME_STATE: ThemeStore = {
    avatar: 'robot',
    accent: 'blue',
    mode: 'dark',
  };

  const storage = localStorageManager<ThemeStore>(THEME_STORAGE_KEY);

  const themeReducer = (current: ThemeStore, update: Partial<ThemeStore>) => ({
    ...current,
    ...update,
  });

  const [state, dispatch] = React.useReducer(themeReducer, INITIAL_THEME_STATE);

  const setMode = React.useCallback((value: ThemeStore['mode']) => {
    storage.set({ ...state, mode: value });
    dispatch({ mode: value });
  }, []);

  const setAccent = React.useCallback((value: ThemeStore['accent']) => {
    storage.set({ ...state, accent: value });
    dispatch({ accent: value });
  }, []);

  const setAvatar = React.useCallback((value: ThemeStore['avatar']) => {
    storage.set({ ...state, avatar: value });
    dispatch({ avatar: value });
  }, []);

  React.useLayoutEffect(() => {
    const root = document.getElementById('root')!;
    root.setAttribute('data-prefers-color-scheme', String(state.mode));
    root.setAttribute('data-prefers-color-accent', String(state.accent));
  }, [state]);

  React.useLayoutEffect(() => {
    const update = async () => {
      try {
        const current = await storage.get();
        dispatch(current);
      } catch (error: any) {
        console.error('[@v2/ThemeProvider]: Theme `dispatch()` method unsuccessful');
      }
    };
    void update();
  }, []);

  return (
    <ThemeCTXProvider value={{ state, setMode, setAccent, setAvatar }}>{children}</ThemeCTXProvider>
  );
};
