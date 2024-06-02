import {
  DATA_THEME_MAP_COLOR_FORMAT_ALPHA,
  DATA_THEME_MAP_COLOR_FORMAT,
  DATA_THEME_MAP_COLOR,
  DATA_THEME_MAP_DIR,
  DATA_THEME_MAP_MODE,
  DATA_THEME_MAP_SCHEME,
} from '@/data';

export declare namespace Theme {
  export type Dir = keyof typeof DATA_THEME_MAP_DIR;
  export type Mode = keyof typeof DATA_THEME_MAP_MODE;
  export type Scheme = keyof typeof DATA_THEME_MAP_SCHEME;

  export type Color = keyof typeof DATA_THEME_MAP_COLOR;
  export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  export type ColorLevelShade = `${ColorLevel}00`;
  export type ColorLevelAlpha = `A${ColorLevel}00`;

  export type ColorFormat = keyof typeof DATA_THEME_MAP_COLOR_FORMAT;
  export type ColorFormatAlpha = keyof typeof DATA_THEME_MAP_COLOR_FORMAT_ALPHA;
  export type ColorFormatProps = Record<ColorFormat, string>;
}
