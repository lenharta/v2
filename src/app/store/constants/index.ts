import { Store, Theme } from '@/types';

const DEFAULT_STORE: Store.State = {
  dir: 'ltr',
  lang: 'en',
  mode: 'dark',
  icons: 'outline',
  accent: 'blue',
  contrast: 'no',
  nonce: () => '',
};

const THEME_ATTRIBUTES: Theme.AttributeKey[] = ['dir', 'mode', 'accent', 'contrast'];

const THEME_ATTRIBUTE_MAP: Record<Theme.AttributeKey, string> = {
  dir: 'data-prefers-dir',
  mode: 'data-prefers-color-mode',
  accent: 'data-prefers-color-accent',
  contrast: 'data-prefers-color-contrast',
} as const;

export { DEFAULT_STORE, THEME_ATTRIBUTES, THEME_ATTRIBUTE_MAP };
