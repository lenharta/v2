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

export enum THEME_INTERACTION_TYPE {
  moveable = 'moveable',
  clickable = 'clickable',
  togglable = 'togglable',
  expandable = 'expandable',
  selectable = 'selectable',
}

export enum THEME_INTERACTION_STATE {
  enabled = 'enabled',
  focused = 'focused',
  hovered = 'hovered',
  pressed = 'pressed',
  selected = 'selected',
  disabled = 'disabled',
}

export declare namespace Theme {
  export type Dir = keyof typeof THEME_DIR;
  export type Mode = keyof typeof THEME_MODE;
  export type Color = keyof typeof THEME_COLOR;
  export type Scheme = keyof typeof THEME_SCHEME;

  export type InteractionType = keyof typeof THEME_INTERACTION_TYPE;
  export type InteractionState = keyof typeof THEME_INTERACTION_STATE;

  export type Attributes = 'dir' | 'mode' | 'color';

  export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  export type ColorShade = `${ColorLevel}00`;
  export type ColorAlpha = `A${ColorLevel}00`;
  export type ColorFormat = 'hsl' | 'hex' | 'rgb';

  export type ColorMapByMode<T> = Record<Mode, T>;
  export type ColorMapByName<T> = Record<Color, T>;
  export type ColorMapByFormat<T> = Record<ColorFormat, T>;

  export type SurfaceLevel = 1 | 2 | 3 | 4 | 5;
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
