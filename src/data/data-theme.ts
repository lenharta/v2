import { Theme } from '@/types';

const DATA_THEME_MODES: Theme.Mode[] = ['light', 'dark', 'dim'];

const DATA_THEME_SCHEMES: Theme.Scheme[] = ['accent', 'primary', 'secondary'];

const DATA_THEME_ATTRIBUTES: Theme.Attributes[] = ['dir', 'mode', 'color'];

const DATA_THEME_COLOR_FORMATS: Theme.ColorFormat[] = ['hex', 'hsl', 'rgb'];

const DATA_THEME_COLOR: Theme.Color[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'mint',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'brown',
];

const DATA_THEME_COLOR_ALPHAS: Theme.ColorAlpha[] = [
  'A100',
  'A200',
  'A300',
  'A400',
  'A500',
  'A600',
  'A700',
  'A800',
  'A900',
];

const DATA_THEME_COLOR_SHADES: Theme.ColorShade[] = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const DATA_THEME_MAP_ATTRIBUTE: Record<Theme.Attributes, string> = {
  dir: 'data-prefers-dir',
  mode: 'data-prefers-mode',
  color: 'data-prefers-color',
};

const DATA_THEME_MAP_SCHEME: Record<Theme.Scheme, Theme.Scheme> = {
  accent: 'accent',
  primary: 'primary',
  secondary: 'secondary',
};

export {
  DATA_THEME_MODES,
  DATA_THEME_SCHEMES,
  DATA_THEME_ATTRIBUTES,
  //
  DATA_THEME_COLOR,
  DATA_THEME_COLOR_ALPHAS,
  DATA_THEME_COLOR_SHADES,
  DATA_THEME_COLOR_FORMATS,
  //
  DATA_THEME_MAP_SCHEME,
  DATA_THEME_MAP_ATTRIBUTE,
};
