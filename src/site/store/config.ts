import { RootAttributes, ThemeStore } from './types';

export const initialThemeState: ThemeStore = {
  dir: 'ltr',
  mode: 'dark',
  lang: 'english',
  accent: 'blue',
  avatar: 'person',
};

export const rootAttributes: (keyof typeof RootAttributes)[] = ['mode', 'accent'];
