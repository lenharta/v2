import * as React from 'react';
import type { ThemeStore } from '@/types';

export type ThemeContextValue = {
  state: ThemeStore;
  setMode(value: ThemeStore['mode']): void;
  setAccent(value: ThemeStore['accent']): void;
  setAvatar(value: ThemeStore['avatar']): void;
};

export const ThemeCTX = React.createContext({} as ThemeContextValue);
export const ThemeCTXProvider = ThemeCTX.Provider;
export const useThemeCTX = () => React.useContext(ThemeCTX);
