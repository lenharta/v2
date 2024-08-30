export const DEFAULT_STORE = {
  dir: 'ltr',
  lang: 'en',
  mode: 'dark',
  icons: 'outline',
  accent: 'blue',
  contrast: 'no',
  nonce: () => '',
} as const;

export const THEME_ATTRIBUTES = ['dir', 'mode', 'accent', 'contrast'] as const;

export const THEME_ATTRIBUTE_MAP = {
  dir: 'data-prefers-dir',
  mode: 'data-prefers-color-mode',
  accent: 'data-prefers-color-accent',
  contrast: 'data-prefers-color-contrast',
} as const;
