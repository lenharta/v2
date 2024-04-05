import { Store } from '@/types';

export const rootAttributes: Store.AttributeKey[] = ['dir', 'mode', 'accent'];

export const initialAppState: Store.AppState = {};

export const initialThemeState: Store.ThemeState = {
  dir: 'ltr',
  mode: 'dark',
  lang: { name: 'english', code: 'en' },
  accent: 'blue',
  avatar: 'person',
};
