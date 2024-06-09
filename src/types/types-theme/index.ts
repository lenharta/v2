// const THEME_ATTRIBUTES_ROOT = {
//   dir: 'data-prefers-dir-mode',
//   mode: 'data-prefers-theme-mode',
//   color: 'data-prefers-color-mode',
// } as const;

// const THEME_ATTRIBUTES_SCHEME = {
//   color: 'data-scheme-color',
//   status: 'data-scheme-status',
//   surface: 'data-scheme-surface',
// } as const;

export declare namespace Theme {
  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'light' | 'dim' | 'dark';
  export type Icons = 'fill' | 'outline';
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
  export type Attributes = 'dir' | 'mode' | 'accent';

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

  // THEME | COLOR

  export type Color = ColorWarm | ColorCool;
  export type ColorWarm = 'red' | 'orange' | 'yellow' | 'pink' | 'brown';
  export type ColorCool = 'green' | 'mint' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'purple';
  export type ColorAlpha = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
  export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

  // THEME | COLOR

  export type TokenColorMap<T extends string> = Record<T, string>;

  export type ColorKeyBase<T extends string> = `c-${T}`;
  export type ColorKeyAlpha<T extends string> = `${ColorKeyBase<T>}-A${ColorAlpha}`;
  export type ColorKeyShade<T extends string> = `${ColorKeyBase<T>}-A${ColorShade}`;

  export type ColorKeyHexBase<T extends string> = `${ColorKeyBase<T>}-hex`;
  export type ColorKeyHexDim<T extends string> = `${ColorKeyBase<T>}-hex-dim`;
  export type ColorKeyHexDark<T extends string> = `${ColorKeyBase<T>}-hex-dark`;
  export type ColorKeyHexLight<T extends string> = `${ColorKeyBase<T>}-hex-light`;

  export type ColorKeyHex<T extends string> =
    | ColorKeyHexBase<T>
    | ColorKeyHexDim<T>
    | ColorKeyHexDark<T>
    | ColorKeyHexLight<T>;

  export type ColorKeyHueBase<T extends string> = `${ColorKeyBase<T>}-hue`;
  export type ColorKeyHueDim<T extends string> = `${ColorKeyBase<T>}-hue-dim`;
  export type ColorKeyHueDark<T extends string> = `${ColorKeyBase<T>}-hue-dark`;
  export type ColorKeyHueLight<T extends string> = `${ColorKeyBase<T>}-hue-light`;

  export type ColorKeyHue<T extends string> =
    | ColorKeyHueBase<T>
    | ColorKeyHueDim<T>
    | ColorKeyHueDark<T>
    | ColorKeyHueLight<T>;

  export type ColorKeyHslBase<T extends string> = `${ColorKeyBase<T>}-hsl`;
  export type ColorKeyHslDim<T extends string> = `${ColorKeyBase<T>}-hsl-dim`;
  export type ColorKeyHslDark<T extends string> = `${ColorKeyBase<T>}-hsl-dark`;
  export type ColorKeyHslLight<T extends string> = `${ColorKeyBase<T>}-hsl-light`;

  export type ColorKeyHsl<T extends string> =
    | ColorKeyHslBase<T>
    | ColorKeyHslDim<T>
    | ColorKeyHslDark<T>
    | ColorKeyHslLight<T>;

  export type TokenColorKeyBase = ColorKeyBase<Color>;
  export type TokenColorKeyAlpha = ColorKeyAlpha<Color>;
  export type TokenColorKeyShade = ColorKeyShade<Color>;

  export type TokenColorKeyHexBase = ColorKeyHexBase<Color>;
  export type TokenColorKeyHueBase = ColorKeyHueBase<Color>;
  export type TokenColorKeyHslBase = ColorKeyHslBase<Color>;

  export type TokenColorKeyHexDim = ColorKeyHexDim<Color>;
  export type TokenColorKeyHueDim = ColorKeyHueDim<Color>;
  export type TokenColorKeyHslDim = ColorKeyHslDim<Color>;

  export type TokenColorKeyHexDark = ColorKeyHexDark<Color>;
  export type TokenColorKeyHueDark = ColorKeyHueDark<Color>;
  export type TokenColorKeyHslDark = ColorKeyHslDark<Color>;

  export type TokenColorKeyHexLight = ColorKeyHexLight<Color>;
  export type TokenColorKeyHueLight = ColorKeyHueLight<Color>;
  export type TokenColorKeyHslLight = ColorKeyHslLight<Color>;

  // THEME | TOKEN | COLOR | KEY

  export type TokenColorKeyRedBase = ColorKeyBase<'red'>;
  export type TokenColorKeyOrangeBase = ColorKeyBase<'orange'>;
  export type TokenColorKeyYellowBase = ColorKeyBase<'yellow'>;
  export type TokenColorKeyGreenBase = ColorKeyBase<'green'>;
  export type TokenColorKeyMintBase = ColorKeyBase<'mint'>;
  export type TokenColorKeyTealBase = ColorKeyBase<'teal'>;
  export type TokenColorKeyCyanBase = ColorKeyBase<'cyan'>;
  export type TokenColorKeyBlueBase = ColorKeyBase<'blue'>;
  export type TokenColorKeyIndigoBase = ColorKeyBase<'indigo'>;
  export type TokenColorKeyPurpleBase = ColorKeyBase<'purple'>;
  export type TokenColorKeyPinkBase = ColorKeyBase<'pink'>;
  export type TokenColorKeyBrownBase = ColorKeyBase<'brown'>;

  // THEME | TOKEN | COLOR | KEY | HEX

  export type TokenColorKeyHexRed = ColorKeyHex<'red'>;

  export type TokenColorKeyHexRedBase = ColorKeyHexBase<'red'>;
  export type TokenColorKeyHexRedDim = ColorKeyHexDim<'red'>;
  export type TokenColorKeyHexRedDark = ColorKeyHexDark<'red'>;
  export type TokenColorKeyHexRedLight = ColorKeyHexLight<'red'>;

  export type TokenColorKeyHexOrange = ColorKeyHex<'orange'>;

  export type TokenColorKeyHexOrangeBase = ColorKeyHexBase<'orange'>;
  export type TokenColorKeyHexOrangeDim = ColorKeyHexDim<'orange'>;
  export type TokenColorKeyHexOrangeDark = ColorKeyHexDark<'orange'>;
  export type TokenColorKeyHexOrangeLight = ColorKeyHexLight<'orange'>;

  export type TokenColorKeyHexYellow = ColorKeyHex<'yellow'>;

  export type TokenColorKeyHexYellowBase = ColorKeyHexBase<'yellow'>;
  export type TokenColorKeyHexYellowDim = ColorKeyHexDim<'yellow'>;
  export type TokenColorKeyHexYellowDark = ColorKeyHexDark<'yellow'>;
  export type TokenColorKeyHexYellowLight = ColorKeyHexLight<'yellow'>;

  export type TokenColorKeyHexGreen = ColorKeyHex<'green'>;

  export type TokenColorKeyHexGreenBase = ColorKeyHexBase<'green'>;
  export type TokenColorKeyHexGreenDim = ColorKeyHexDim<'green'>;
  export type TokenColorKeyHexGreenDark = ColorKeyHexDark<'green'>;
  export type TokenColorKeyHexGreenLight = ColorKeyHexLight<'green'>;

  export type TokenColorKeyHexMint = ColorKeyHex<'mint'>;

  export type TokenColorKeyHexMintBase = ColorKeyHexBase<'mint'>;
  export type TokenColorKeyHexMintDim = ColorKeyHexDim<'mint'>;
  export type TokenColorKeyHexMintDark = ColorKeyHexDark<'mint'>;
  export type TokenColorKeyHexMintLight = ColorKeyHexLight<'mint'>;

  export type TokenColorKeyHexTeal = ColorKeyHex<'teal'>;

  export type TokenColorKeyHexTealBase = ColorKeyHexBase<'teal'>;
  export type TokenColorKeyHexTealDim = ColorKeyHexDim<'teal'>;
  export type TokenColorKeyHexTealDark = ColorKeyHexDark<'teal'>;
  export type TokenColorKeyHexTealLight = ColorKeyHexLight<'teal'>;

  export type TokenColorKeyHexCyan = ColorKeyHex<'cyan'>;

  export type TokenColorKeyHexCyanBase = ColorKeyHexBase<'cyan'>;
  export type TokenColorKeyHexCyanDim = ColorKeyHexDim<'cyan'>;
  export type TokenColorKeyHexCyanDark = ColorKeyHexDark<'cyan'>;
  export type TokenColorKeyHexCyanLight = ColorKeyHexLight<'cyan'>;

  export type TokenColorKeyHexBlue = ColorKeyHex<'blue'>;

  export type TokenColorKeyHexBlueBase = ColorKeyHexBase<'blue'>;
  export type TokenColorKeyHexBlueDim = ColorKeyHexDim<'blue'>;
  export type TokenColorKeyHexBlueDark = ColorKeyHexDark<'blue'>;
  export type TokenColorKeyHexBlueLight = ColorKeyHexLight<'blue'>;

  export type TokenColorKeyHexIndigo = ColorKeyHex<'indigo'>;

  export type TokenColorKeyHexIndigoBase = ColorKeyHexBase<'indigo'>;
  export type TokenColorKeyHexIndigoDim = ColorKeyHexDim<'indigo'>;
  export type TokenColorKeyHexIndigoDark = ColorKeyHexDark<'indigo'>;
  export type TokenColorKeyHexIndigoLight = ColorKeyHexLight<'indigo'>;

  export type TokenColorKeyHexPurple = ColorKeyHex<'purple'>;

  export type TokenColorKeyHexPurpleBase = ColorKeyHexBase<'purple'>;
  export type TokenColorKeyHexPurpleDim = ColorKeyHexDim<'purple'>;
  export type TokenColorKeyHexPurpleDark = ColorKeyHexDark<'purple'>;
  export type TokenColorKeyHexPurpleLight = ColorKeyHexLight<'purple'>;

  export type TokenColorKeyHexPink = ColorKeyHex<'pink'>;

  export type TokenColorKeyHexPinkBase = ColorKeyHexBase<'pink'>;
  export type TokenColorKeyHexPinkDim = ColorKeyHexDim<'pink'>;
  export type TokenColorKeyHexPinkDark = ColorKeyHexDark<'pink'>;
  export type TokenColorKeyHexPinkLight = ColorKeyHexLight<'pink'>;

  export type TokenColorKeyHexBrown = ColorKeyHex<'brown'>;

  export type TokenColorKeyHexBrownBase = ColorKeyHexBase<'brown'>;
  export type TokenColorKeyHexBrownDim = ColorKeyHexDim<'brown'>;
  export type TokenColorKeyHexBrownDark = ColorKeyHexDark<'brown'>;
  export type TokenColorKeyHexBrownLight = ColorKeyHexLight<'brown'>;

  // THEME | TOKEN | COLOR | KEY | HUE

  export type TokenColorKeyHueRed = ColorKeyHue<'red'>;

  export type TokenColorKeyHueRedBase = ColorKeyHueBase<'red'>;
  export type TokenColorKeyHueRedDim = ColorKeyHueDim<'red'>;
  export type TokenColorKeyHueRedDark = ColorKeyHueDark<'red'>;
  export type TokenColorKeyHueRedLight = ColorKeyHueLight<'red'>;

  export type TokenColorKeyHueOrange = ColorKeyHue<'orange'>;

  export type TokenColorKeyHueOrangeBase = ColorKeyHueBase<'orange'>;
  export type TokenColorKeyHueOrangeDim = ColorKeyHueDim<'orange'>;
  export type TokenColorKeyHueOrangeDark = ColorKeyHueDark<'orange'>;
  export type TokenColorKeyHueOrangeLight = ColorKeyHueLight<'orange'>;

  export type TokenColorKeyHueYellow = ColorKeyHue<'yellow'>;

  export type TokenColorKeyHueYellowBase = ColorKeyHueBase<'yellow'>;
  export type TokenColorKeyHueYellowDim = ColorKeyHueDim<'yellow'>;
  export type TokenColorKeyHueYellowDark = ColorKeyHueDark<'yellow'>;
  export type TokenColorKeyHueYellowLight = ColorKeyHueLight<'yellow'>;

  export type TokenColorKeyHueGreen = ColorKeyHue<'green'>;

  export type TokenColorKeyHueGreenBase = ColorKeyHueBase<'green'>;
  export type TokenColorKeyHueGreenDim = ColorKeyHueDim<'green'>;
  export type TokenColorKeyHueGreenDark = ColorKeyHueDark<'green'>;
  export type TokenColorKeyHueGreenLight = ColorKeyHueLight<'green'>;

  export type TokenColorKeyHueMint = ColorKeyHue<'mint'>;

  export type TokenColorKeyHueMintBase = ColorKeyHueBase<'mint'>;
  export type TokenColorKeyHueMintDim = ColorKeyHueDim<'mint'>;
  export type TokenColorKeyHueMintDark = ColorKeyHueDark<'mint'>;
  export type TokenColorKeyHueMintLight = ColorKeyHueLight<'mint'>;

  export type TokenColorKeyHueTeal = ColorKeyHue<'teal'>;

  export type TokenColorKeyHueTealBase = ColorKeyHueBase<'teal'>;
  export type TokenColorKeyHueTealDim = ColorKeyHueDim<'teal'>;
  export type TokenColorKeyHueTealDark = ColorKeyHueDark<'teal'>;
  export type TokenColorKeyHueTealLight = ColorKeyHueLight<'teal'>;

  export type TokenColorKeyHueCyan = ColorKeyHue<'cyan'>;

  export type TokenColorKeyHueCyanBase = ColorKeyHueBase<'cyan'>;
  export type TokenColorKeyHueCyanDim = ColorKeyHueDim<'cyan'>;
  export type TokenColorKeyHueCyanDark = ColorKeyHueDark<'cyan'>;
  export type TokenColorKeyHueCyanLight = ColorKeyHueLight<'cyan'>;

  export type TokenColorKeyHueBlue = ColorKeyHue<'blue'>;

  export type TokenColorKeyHueBlueBase = ColorKeyHueBase<'blue'>;
  export type TokenColorKeyHueBlueDim = ColorKeyHueDim<'blue'>;
  export type TokenColorKeyHueBlueDark = ColorKeyHueDark<'blue'>;
  export type TokenColorKeyHueBlueLight = ColorKeyHueLight<'blue'>;

  export type TokenColorKeyHueIndigo = ColorKeyHue<'indigo'>;

  export type TokenColorKeyHueIndigoBase = ColorKeyHueBase<'indigo'>;
  export type TokenColorKeyHueIndigoDim = ColorKeyHueDim<'indigo'>;
  export type TokenColorKeyHueIndigoDark = ColorKeyHueDark<'indigo'>;
  export type TokenColorKeyHueIndigoLight = ColorKeyHueLight<'indigo'>;

  export type TokenColorKeyHuePurple = ColorKeyHue<'purple'>;

  export type TokenColorKeyHuePurpleBase = ColorKeyHueBase<'purple'>;
  export type TokenColorKeyHuePurpleDim = ColorKeyHueDim<'purple'>;
  export type TokenColorKeyHuePurpleDark = ColorKeyHueDark<'purple'>;
  export type TokenColorKeyHuePurpleLight = ColorKeyHueLight<'purple'>;

  export type TokenColorKeyHuePink = ColorKeyHue<'pink'>;

  export type TokenColorKeyHuePinkBase = ColorKeyHueBase<'pink'>;
  export type TokenColorKeyHuePinkDim = ColorKeyHueDim<'pink'>;
  export type TokenColorKeyHuePinkDark = ColorKeyHueDark<'pink'>;
  export type TokenColorKeyHuePinkLight = ColorKeyHueLight<'pink'>;

  export type TokenColorKeyHueBrown = ColorKeyHue<'brown'>;

  export type TokenColorKeyHueBrownBase = ColorKeyHueBase<'brown'>;
  export type TokenColorKeyHueBrownDim = ColorKeyHueDim<'brown'>;
  export type TokenColorKeyHueBrownDark = ColorKeyHueDark<'brown'>;
  export type TokenColorKeyHueBrownLight = ColorKeyHueLight<'brown'>;

  // THEME | TOKEN | COLOR | KEY | HSL

  export type TokenColorKeyHslRed = ColorKeyHsl<'red'>;

  export type TokenColorKeyHslRedBase = ColorKeyHslBase<'red'>;
  export type TokenColorKeyHslRedDim = ColorKeyHslDim<'red'>;
  export type TokenColorKeyHslRedDark = ColorKeyHslDark<'red'>;
  export type TokenColorKeyHslRedLight = ColorKeyHslLight<'red'>;

  export type TokenColorKeyHslOrange = ColorKeyHsl<'orange'>;

  export type TokenColorKeyHslOrangeBase = ColorKeyHslBase<'orange'>;
  export type TokenColorKeyHslOrangeDim = ColorKeyHslDim<'orange'>;
  export type TokenColorKeyHslOrangeDark = ColorKeyHslDark<'orange'>;
  export type TokenColorKeyHslOrangeLight = ColorKeyHslLight<'orange'>;

  export type TokenColorKeyHslYellow = ColorKeyHsl<'yellow'>;

  export type TokenColorKeyHslYellowBase = ColorKeyHslBase<'yellow'>;
  export type TokenColorKeyHslYellowDim = ColorKeyHslDim<'yellow'>;
  export type TokenColorKeyHslYellowDark = ColorKeyHslDark<'yellow'>;
  export type TokenColorKeyHslYellowLight = ColorKeyHslLight<'yellow'>;

  export type TokenColorKeyHslGreen = ColorKeyHsl<'green'>;

  export type TokenColorKeyHslGreenBase = ColorKeyHslBase<'green'>;
  export type TokenColorKeyHslGreenDim = ColorKeyHslDim<'green'>;
  export type TokenColorKeyHslGreenDark = ColorKeyHslDark<'green'>;
  export type TokenColorKeyHslGreenLight = ColorKeyHslLight<'green'>;

  export type TokenColorKeyHslMint = ColorKeyHsl<'mint'>;

  export type TokenColorKeyHslMintBase = ColorKeyHslBase<'mint'>;
  export type TokenColorKeyHslMintDim = ColorKeyHslDim<'mint'>;
  export type TokenColorKeyHslMintDark = ColorKeyHslDark<'mint'>;
  export type TokenColorKeyHslMintLight = ColorKeyHslLight<'mint'>;

  export type TokenColorKeyHslTeal = ColorKeyHsl<'teal'>;

  export type TokenColorKeyHslTealBase = ColorKeyHslBase<'teal'>;
  export type TokenColorKeyHslTealDim = ColorKeyHslDim<'teal'>;
  export type TokenColorKeyHslTealDark = ColorKeyHslDark<'teal'>;
  export type TokenColorKeyHslTealLight = ColorKeyHslLight<'teal'>;

  export type TokenColorKeyHslCyan = ColorKeyHsl<'cyan'>;

  export type TokenColorKeyHslCyanBase = ColorKeyHslBase<'cyan'>;
  export type TokenColorKeyHslCyanDim = ColorKeyHslDim<'cyan'>;
  export type TokenColorKeyHslCyanDark = ColorKeyHslDark<'cyan'>;
  export type TokenColorKeyHslCyanLight = ColorKeyHslLight<'cyan'>;

  export type TokenColorKeyHslBlue = ColorKeyHsl<'blue'>;

  export type TokenColorKeyHslBlueBase = ColorKeyHslBase<'blue'>;
  export type TokenColorKeyHslBlueDim = ColorKeyHslDim<'blue'>;
  export type TokenColorKeyHslBlueDark = ColorKeyHslDark<'blue'>;
  export type TokenColorKeyHslBlueLight = ColorKeyHslLight<'blue'>;

  export type TokenColorKeyHslIndigo = ColorKeyHsl<'indigo'>;

  export type TokenColorKeyHslIndigoBase = ColorKeyHslBase<'indigo'>;
  export type TokenColorKeyHslIndigoDim = ColorKeyHslDim<'indigo'>;
  export type TokenColorKeyHslIndigoDark = ColorKeyHslDark<'indigo'>;
  export type TokenColorKeyHslIndigoLight = ColorKeyHslLight<'indigo'>;

  export type TokenColorKeyHslPurple = ColorKeyHsl<'purple'>;

  export type TokenColorKeyHslPurpleBase = ColorKeyHslBase<'purple'>;
  export type TokenColorKeyHslPurpleDim = ColorKeyHslDim<'purple'>;
  export type TokenColorKeyHslPurpleDark = ColorKeyHslDark<'purple'>;
  export type TokenColorKeyHslPurpleLight = ColorKeyHslLight<'purple'>;

  export type TokenColorKeyHslPink = ColorKeyHsl<'pink'>;

  export type TokenColorKeyHslPinkBase = ColorKeyHslBase<'pink'>;
  export type TokenColorKeyHslPinkDim = ColorKeyHslDim<'pink'>;
  export type TokenColorKeyHslPinkDark = ColorKeyHslDark<'pink'>;
  export type TokenColorKeyHslPinkLight = ColorKeyHslLight<'pink'>;

  export type TokenColorKeyHslBrown = ColorKeyHsl<'brown'>;

  export type TokenColorKeyHslBrownBase = ColorKeyHslBase<'brown'>;
  export type TokenColorKeyHslBrownDim = ColorKeyHslDim<'brown'>;
  export type TokenColorKeyHslBrownDark = ColorKeyHslDark<'brown'>;
  export type TokenColorKeyHslBrownLight = ColorKeyHslLight<'brown'>;
}
