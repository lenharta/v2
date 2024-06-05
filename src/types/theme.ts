export enum THEME_COLOR {
  red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  mint = 'mint',
  teal = 'teal',
  cyan = 'cyan',
  blue = 'blue',
  indigo = 'indigo',
  purple = 'purple',
  pink = 'pink',
  brown = 'brown',
}

export enum THEME_DIR {
  ltr = 'ltr',
  rtl = 'rtl',
}

export enum THEME_MODE {
  dim = 'dim',
  dark = 'dark',
  light = 'light',
}

export enum THEME_SCHEME {
  accent = 'accent',
  primary = 'primary',
  secondary = 'secondary',
}

export enum THEME_SIZE_COMPACT {
  sm = 'small',
  md = 'medium',
  lg = 'large',
}

export enum THEME_SIZE {
  xs = 'x-small',
  sm = 'small',
  md = 'medium',
  lg = 'large',
  xl = 'x-large',
}

export enum THEME_SIZE_EXPANDED {
  xxs = '2x-small',
  xs = 'x-small',
  sm = 'small',
  md = 'medium',
  lg = 'large',
  xl = 'x-large',
  xxl = '2x-large',
}

export enum THEME_STATUS {
  error = 'error',
  warning = 'warning',
  success = 'success',
}

export enum THEME_PRIORITY {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export enum THEME_INTERACTION_STATE {
  enabled = 'enabled',
  focused = 'focused',
  hovered = 'hovered',
  pressed = 'pressed',
  selected = 'selected',
  disabled = 'disabled',
}

export enum THEME_INTERACTION_VARIANT {
  moveable = 'moveable',
  clickable = 'clickable',
  togglable = 'togglable',
  expandable = 'expandable',
  selectable = 'selectable',
}

export declare namespace Theme {
  export type Dir = keyof typeof THEME_DIR;
  export type Mode = keyof typeof THEME_MODE;
  export type Color = keyof typeof THEME_COLOR;
  export type Scheme = keyof typeof THEME_SCHEME;

  export type Status = keyof typeof THEME_STATUS;
  export type Priority = keyof typeof THEME_PRIORITY;

  export type Size = keyof typeof THEME_SIZE;
  export type SizeCompact = keyof typeof THEME_SIZE_COMPACT;
  export type SizeExpanded = keyof typeof THEME_SIZE_EXPANDED;

  export type InteractionState = keyof typeof THEME_INTERACTION_STATE;
  export type InteractionVariant = keyof typeof THEME_INTERACTION_VARIANT;

  export type Attributes = 'dir' | 'mode' | 'color';

  export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
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
