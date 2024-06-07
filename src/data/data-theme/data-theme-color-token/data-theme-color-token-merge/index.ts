import { THEME_MAP_COLOR_TOKEN_ALPHA } from '../data-theme-color-token-alpha';
import { THEME_MAP_COLOR_TOKEN_BASE } from '../data-theme-color-token-base';
import { THEME_MAP_COLOR_TOKEN_HEX } from '../data-theme-color-token-hex';
import { THEME_MAP_COLOR_TOKEN_HSL } from '../data-theme-color-token-hsl';
import { THEME_MAP_COLOR_TOKEN_HUE } from '../data-theme-color-token-hue';
import { THEME_MAP_COLOR_TOKEN_SHADE } from '../data-theme-color-token-shade';

export const THEME_MAP_COLOR_TOKEN = {
  ...THEME_MAP_COLOR_TOKEN_BASE,
  ...THEME_MAP_COLOR_TOKEN_ALPHA,
  ...THEME_MAP_COLOR_TOKEN_SHADE,
  ...THEME_MAP_COLOR_TOKEN_HUE,
  ...THEME_MAP_COLOR_TOKEN_HEX,
  ...THEME_MAP_COLOR_TOKEN_HSL,
};
