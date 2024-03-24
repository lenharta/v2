import { IconName } from '@/common';
import { Position } from './common';
import { Location } from 'react-router-dom';

export type StoreState = {
  error?: string;
  loading?: boolean;
  sessionKey?: string;
  location?: Location;
  isMenuOpen?: boolean;
  isSplash?: boolean;
  nonce?: () => string;
};

export type ThemeStore = {
  dir: Dir;
  lang: Language;
  mode: Mode;
  accent: Accent;
  avatar: Avatar;
};

export enum SETTINGS_THEME_MODE {
  light = 'mode-light',
  dark = 'mode-dark',
  dim = 'mode-dim',
}

export enum SETTINGS_THEME_ACCENT {
  orange = 'color-accent-orange',
  yellow = 'color-accent-yellow',
  green = 'color-accent-green',
  mint = 'color-accent-mint',
  teal = 'color-accent-teal',
  cyan = 'color-accent-cyan',
  blue = 'color-accent-blue',
  indigo = 'color-accent-indigo',
  purple = 'color-accent-purple',
  pink = 'color-accent-pink',
  brown = 'color-accent-brown',
  red = 'color-accent-red',
}

export enum SETTINGS_THEME_AVATAR {
  dog = 'avatar-dog',
  rocket = 'avatar-rocket',
  music = 'avatar-music',
  robot = 'avatar-robot',
  pizza = 'avatar-pizza',
  football = 'avatar-football',
  baseball = 'avatar-baseball',
  basketball = 'avatar-basketball',
  star = 'avatar-star',
  heart = 'avatar-heart',
  code = 'avatar-code',
  palette = 'avatar-palette',
  coffee = 'avatar-coffee',
  beer = 'avatar-beer',
  smiley = 'avatar-smiley',
  bolt = 'avatar-bolt',
  film = 'avatar-film',
  puzzle = 'avatar-puzzle',
  shield = 'avatar-shield',
  soccer = 'avatar-soccer',
}

export type Store = StoreState;
export type StoreDispatch = React.Dispatch<StoreState>;
export type Language = 'english' | 'german' | 'spanish' | 'japanese' | 'arabic' | 'french';
export type ValidationStatus = 'info' | 'warn' | 'danger' | 'success';

export type Dir = 'ltr' | 'rtl';
export type Mode = keyof typeof SETTINGS_THEME_MODE;
export type Avatar = IconName;
export type Accent = keyof typeof SETTINGS_THEME_ACCENT;
export type AccentLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
