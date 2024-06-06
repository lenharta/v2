const COLOR = {
  red: 'data-color-red',
  orange: 'data-color-orange',
  yellow: 'data-color-yellow',
  green: 'data-color-green',
  mint: 'data-color-mint',
  teal: 'data-color-teal',
  cyan: 'data-color-cyan',
  blue: 'data-color-blue',
  indigo: 'data-color-indigo',
  purple: 'data-color-purple',
  pink: 'data-color-pink',
  brown: 'data-color-brown',
};

const ACCENT = {
  red: 'data-prefers-accent-red',
  orange: 'data-prefers-accent-orange',
  yellow: 'data-prefers-accent-yellow',
  green: 'data-prefers-accent-green',
  mint: 'data-prefers-accent-mint',
  teal: 'data-prefers-accent-teal',
  cyan: 'data-prefers-accent-cyan',
  blue: 'data-prefers-accent-blue',
  indigo: 'data-prefers-accent-indigo',
  purple: 'data-prefers-accent-purple',
  pink: 'data-prefers-accent-pink',
  brown: 'data-prefers-accent-brown',
};

const ORIENTAION = {
  vertical: 'data-orientation-vertical',
  horizontal: 'data-orientation-horizontal',
};

const DIR = {
  ltr: 'data-prefers-dir-ltr',
  rtl: 'data-prefers-dir-rtl',
};

const MODE = {
  dim: 'data-prefers-mode-dim',
  dark: 'data-prefers-mode-dark',
  light: 'data-prefers-mode-light',
};

const SCHEME = {
  accent: 'data-scheme-accent',
  primary: 'data-scheme-primary',
  secondary: 'data-scheme-secondary',
};

const SIZE_COMPACT = {
  sm: 'data-size-sm',
  md: 'data-size-md',
  lg: 'data-size-lg',
};

const SIZE = {
  xs: 'data-size-xs',
  sm: 'data-size-sm',
  md: 'data-size-md',
  lg: 'data-size-lg',
  xl: 'data-size-xl',
};

const SIZE_EXPANDED = {
  xxs: 'data-size-xxs',
  xs: 'data-size-xs',
  sm: 'data-size-sm',
  md: 'data-size-md',
  lg: 'data-size-lg',
  xl: 'data-size-xl',
  xxl: 'data-size-xxl',
};

const STATUS = {
  error: 'data-status-error',
  danger: 'data-status-danger',
  warning: 'data-status-warning',
  success: 'data-status-success',
};

const PRIORITY = {
  low: 'data-priority-low',
  high: 'data-priority-high',
  medium: 'data-priority-medium',
};

const INTERACTION_STATE = {
  default: 'data-state-default',
  hovered: 'data-state-hovered',
  pressed: 'data-state-pressed',
  focused: 'data-state-focused',
  disabled: 'data-state-disabled',
  selected: 'data-state-selected',
  expanded: 'data-state-expanded',
};

const INTERACTION_VARIANT = {
  moveable: 'data-moveable',
  clickable: 'data-clickable',
  togglable: 'data-togglable',
  expandable: 'data-expandable',
  selectable: 'data-selectable',
};

const MODE_ATTRIBUTES = {
  dir: 'data-prefers-mode-dir',
  mode: 'data-prefers-mode-mode',
  color: 'data-prefers-mode-color',
};

export declare namespace Theme {
  export type Dir = keyof typeof DIR;
  export type Mode = keyof typeof MODE;
  export type Color = keyof typeof COLOR;
  export type Accent = keyof typeof ACCENT;
  export type Scheme = keyof typeof SCHEME;
  export type Orientation = keyof typeof ORIENTAION;
  export type Priority = keyof typeof PRIORITY;
  export type Status = keyof typeof STATUS;

  export type Size = keyof typeof SIZE;
  export type SizeCompact = keyof typeof SIZE_COMPACT;
  export type SizeExpanded = keyof typeof SIZE_EXPANDED;

  export type InteractionState = keyof typeof INTERACTION_STATE;
  export type InteractionVariant = keyof typeof INTERACTION_VARIANT;

  export type Attributes = keyof typeof MODE_ATTRIBUTES;

  export type Value3 = 1 | 2 | 3;
  export type Value6 = Value3 | 4 | 5 | 6;
  export type Value9 = Value6 | 7 | 8 | 9;
  export type Value12 = Value9 | 10 | 11 | 12;
  export type Value16 = Value12 | 13 | 14 | 15 | 16;
  export type Value20 = Value16 | 17 | 18 | 19 | 20;
  export type Value24 = Value20 | 21 | 22 | 23 | 24;

  export type ColorLevel = Value9;
  export type ColorShade = `${ColorLevel}00`;
  export type ColorAlpha = `A${ColorLevel}00`;
  export type ColorFormat = 'hsl' | 'hex' | 'rgb';

  export type ColorMapByMode<T> = Record<Mode, T>;
  export type ColorMapByName<T> = Record<Color, T>;
  export type ColorMapByFormat<T> = Record<ColorFormat, T>;

  export type SurfaceLevel = 1 | 2 | 3 | 4;
  export type SurfaceElement = 'base' | 'layer';
  export type SurfaceElements = 'text' | 'trim' | 'icon';

  export type TokenKey = TokenKeyColor | TokenKeySurface;
  export type TokenKeyColor = 'c';
  export type TokenKeySurface = 's';

  // type TokenColor =
  //   | `--${TokenKeyColor}-${Color}`
  //   | `--${TokenKeyColor}-${Color}-${ColorShade}`
  //   | `--${TokenKeyColor}-${Color}-${ColorAlpha}`
  //   | `--${TokenKeyColor}-${Color}-${ColorFormat}`;

  // type TokenSurface =
  //   | `--${TokenKeySurface}-${SurfaceElement}`
  //   | `--${TokenKeySurface}-${SurfaceElement}-${SurfaceLevel}`
  //   | `--${TokenKeySurface}-${SurfaceElement}-${SurfaceLevel}-${SurfaceState}`;
}
