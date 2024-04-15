import { Store } from '@/types';

export const initialAppState: Store.AppState = {};

export const initialThemeState: Store.ThemeState = {
  dir: 'ltr',
  mode: 'dark',
  lang: { name: 'english', code: 'en' },
  accent: 'blue',
  avatar: 'person',
};
