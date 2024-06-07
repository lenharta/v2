const THEME_ATTRIBUTES_ROOT = {
  dir: 'data-prefers-dir-mode',
  mode: 'data-prefers-theme-mode',
  color: 'data-prefers-color-mode',
} as const;

const THEME_ATTRIBUTES_SCHEME = {
  color: 'data-scheme-color',
  status: 'data-scheme-status',
  surface: 'data-scheme-surface',
} as const;

export declare namespace Theme {
  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'light' | 'dim' | 'dark';
  export type Priority = 'low' | 'medium' | 'high ';
  export type Orientation = 'vertical' | 'horizontal';

  export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type SizeCompact = 'sm' | 'md' | 'lg';
  export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type Unit3 = 1 | 2 | 3;
  export type Unit6 = Unit3 | 4 | 5 | 6;
  export type Unit9 = Unit6 | 7 | 8 | 9;
  export type Unit12 = Unit9 | 10 | 11 | 12;
  export type Unit16 = Unit12 | 13 | 14 | 15 | 16;
  export type Unit20 = Unit16 | 17 | 18 | 19 | 20;
  export type Unit24 = Unit20 | 21 | 22 | 23 | 24;

  export type Scheme = Color | Status | Surface;
  export type Status = 'info' | 'error' | 'success' | `warning`;
  export type Surface = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

  export type ShadeLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
  export type AlphaLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

  export type Color = ColorWarm | ColorCool;
  export type ColorWarm = 'red' | 'orange' | 'yellow' | 'pink' | 'brown';
  export type ColorCool = 'green' | 'mint' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'purple';
  export type ColorShade = `${Color}-S${ShadeLevel}`;
  export type ColorAlpha = `${Color}-A${AlphaLevel}`;
  export type ColorFormat = 'hsl' | 'hex' | 'rgb';

  export type ActionState =
    | 'enabled'
    | 'hovered'
    | 'pressed'
    | 'focused'
    | 'disabled'
    | 'selected'
    | 'expanded';

  export type ActionBehavior =
    | 'movable'
    | 'clickable'
    | 'togglable'
    | 'expandable'
    | 'selectable'
    | 'draggable'
    | 'droppable'
    | 'hoverable'
    | 'scrollable'
    | 'resizable'
    | 'dismissible'
    | 'sortable'
    | 'zoomable'
    | 'swipable'
    | 'editable';

  export type Value3 = 1 | 2 | 3;
  export type Value6 = Value3 | 4 | 5 | 6;
  export type Value9 = Value6 | 7 | 8 | 9;
  export type Value12 = Value9 | 10 | 11 | 12;
  export type Value16 = Value12 | 13 | 14 | 15 | 16;
  export type Value20 = Value16 | 17 | 18 | 19 | 20;
  export type Value24 = Value20 | 21 | 22 | 23 | 24;

  export type ColorLevel = Value9;
  // export type ColorShade = `${ColorLevel}00`;
  // export type ColorAlpha = `A${ColorLevel}00`;

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
