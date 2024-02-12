import { IconName } from '@/common';

export type Store = {
  error?: string;
  loading?: boolean;
};

export type ThemeStore = {
  mode?: ModeKey;
  // accent?: AccentKey;
  avatar?: AvatarKey;
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
  cyan = 'color-accent-cyan',
  blue = 'color-accent-blue',
  indigo = 'color-accent-indigo',
  purple = 'color-accent-purple',
  violet = 'color-accent-violet',
  magenta = 'color-accent-magenta',
  pink = 'color-accent-pink',
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

export type ModeKey = keyof typeof SETTINGS_THEME_MODE;
export type AccentKey = keyof typeof SETTINGS_THEME_ACCENT;
export type AvatarKey = IconName;
