import { Store } from '@/types';

export const DATA_STORE_GLOBAL_ATTRIBUTES: Store.ThemeAttributeKey[] = ['dir', 'mode', 'accent'];

export const DATA_STORE_ACCENT_COLORS: Store.Accent[] = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export const LOOKUP_STORE_THEME_DIR: Record<Store.Dir, Store.Dir> = {
  ltr: 'ltr',
  rtl: 'rtl',
};

export const LOOKUP_STORE_THEME_MODE: Record<Store.Mode, Store.Mode> = {
  dim: 'dim',
  dark: 'dark',
  light: 'light',
};

export const LOOKUP_STORE_THEME_ACCENT_COLOR: Record<Store.Accent, Store.Accent> = {
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

export const LOOKUP_STORE_THEME_AVATAR_ICON: Record<Store.Avatar, Store.Avatar> = {
  person: 'person',
  robot: 'robot',
};

export const LOOKUP_STORE_STORAGE_LOCATION: Record<
  Store.StorageLocationKey,
  Store.StorageLocation
> = {
  local: 'localStorage',
  session: 'sessionStorage',
};

export const LOOKUP_STORE_GLOBAL_ATTRIBUTES: Record<Store.ThemeAttributeKey, string> = {
  dir: 'data-prefers-dir',
  mode: 'data-prefers-mode',
  accent: 'data-prefers-accent',
};
