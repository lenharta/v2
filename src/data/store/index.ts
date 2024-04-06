import { Store } from '@/types';

export const dataStoreThemeAttributes: Store.ThemeAttributeKey[] = ['dir', 'mode', 'accent'];

export const lookupStoreThemeDir: Record<Store.Dir, Store.Dir> = {
  ltr: 'ltr',
  rtl: 'rtl',
};

export const lookupStoreThemeMode: Record<Store.Mode, Store.Mode> = {
  dim: 'dim',
  dark: 'dark',
  light: 'light',
};

export const lookupStoreThemeAccent: Record<Store.Accent, Store.Accent> = {
  red: 'red',
  orange: 'orange',
  amber: 'amber',
  yellow: 'yellow',
  lime: 'lime',
  green: 'green',
  emerald: 'emerald',
  teal: 'teal',
  cyan: 'cyan',
  sky: 'sky',
  blue: 'blue',
  indigo: 'indigo',
  violet: 'violet',
  purple: 'purple',
  fuchsia: 'fuchsia',
  pink: 'pink',
  rose: 'rose',
};

export const lookupStoreThemeAvatar: Record<Store.Avatar, Store.Avatar> = {
  person: 'person',
  robot: 'robot',
};

export const lookupStoreStorageLocation: Record<Store.StorageLocationKey, Store.StorageLocation> = {
  local: 'localStorage',
  session: 'sessionStorage',
};

export const lookupStoreRootAttribute: Record<Store.ThemeAttributeKey, string> = {
  dir: 'data-prefers-dir',
  mode: 'data-prefers-mode',
  accent: 'data-prefers-accent',
};
