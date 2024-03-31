import * as React from 'react';

export enum ThemeMode {
  light = 'mode-light',
  dark = 'mode-dark',
  dim = 'mode-dim',
}

export enum ThemeAccent {
  orange = 'accent-orange',
  yellow = 'accent-yellow',
  green = 'accent-green',
  mint = 'accent-mint',
  teal = 'accent-teal',
  cyan = 'accent-cyan',
  blue = 'accent-blue',
  indigo = 'accent-indigo',
  purple = 'accent-purple',
  pink = 'accent-pink',
  brown = 'accent-brown',
  red = 'accent-red',
}

export enum ThemeDir {
  ltr = 'left-to-right',
  rtl = 'right-to-left',
}

export enum ThemeAvatar {
  person = 'avatar-person',
  robot = 'avatar-robot',
}

export enum ThemeLanguage {
  english = 'en',
  german = 'de',
  spanish = 'es',
  japanese = 'ja',
  arabic = 'ar',
  french = 'fr',
}

export type Dir = keyof typeof ThemeDir;
export type Mode = keyof typeof ThemeMode;
export type Lang = keyof typeof ThemeLanguage;
export type Avatar = keyof typeof ThemeAvatar;
export type Accent = keyof typeof ThemeAccent;

export type StorageType = 'sessionStorage' | 'localStorage';

export enum RootAttributes {
  mode = 'data-prefers-color-scheme',
  accent = 'data-prefers-color-accent',
}

export type AppStore = {
  nonce?: () => string;
  error?: string;
  loading?: boolean;
  location?: Location;
  sessionId?: string;
  isMenuOpen?: boolean;
  isSplashOpen?: boolean;
};

export type ThemeStore = {
  dir: Dir;
  mode: Mode;
  lang: Lang;
  avatar: Avatar;
  accent: Accent;
};

export type AppDispatch = React.Dispatch<Partial<AppStore>>;
export type ThemeDispatch = React.Dispatch<Partial<ThemeStore>>;

export type AppContextValue = {
  nonce?: () => string;
  error?: string;
  loading?: boolean;
  location?: Location;
  sessionId?: string;
  isMenuOpen?: boolean;
  isSplashOpen?: boolean;
};

export type ThemeContextValue = {
  dir: Dir;
  mode: Mode;
  lang: Lang;
  avatar: Avatar;
  accent: Accent;
  setDir(dir: Dir): void;
  setMode(mode: Mode): void;
  setLang(lang: Lang): void;
  setAvatar(avatar: Avatar): void;
  setAccent(accent: Accent): void;
};
