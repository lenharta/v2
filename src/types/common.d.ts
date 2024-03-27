export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SizeCompact = 'sm' | 'md' | 'lg';
export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Sizes = Size | SizeCompact | SizeExpanded;

export type Size3 = 'sm' | 'md' | 'lg';
export type Size5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Size7 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Spacing = 'gutter' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type SpacingType = 'expanded' | 'compact';
export type SpacingToken = Spacing | `${Spacing}-${SpacingType}`;

export type Axis = 'x' | 'y';
export type Side = 'top' | 'left' | 'right' | 'bottom';
export type Length = 'width' | 'height';
export type Alignment = 'start' | 'end';
export type Direction = 'up' | 'down' | 'left' | 'right';
export type Orientation = 'horizontal' | 'vertical';
export type Placement = Side | Position;
export type Position = `${Side}-${Alignment}`;

export type Rect = Coords & Dimensions;
export type Coords = { [key in Axis]: number };
export type SideObject = { [key in Side]: number };
export type Dimensions = { [key in Length]: number };
export type ClientRect = Rect & SideObject;

export type TitleSize =  'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleWeight = '1' | '2' | '3' | '4' | '5';
export type TitleScheme = SurfaceType;
export type TitleVariant = 'default' | 'gradient' | 'outlined';
export type TitleEmphasis = 'low' | 'medium' | 'high';

export type SubtitleSize =  'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type SubtitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type SubtitleWeight = '1' | '2' | '3' | '4' | '5';
export type SubtitleScheme = SurfaceType;
export type SubtitleVariant = 'default' | 'gradient' | 'outlined';
export type SubtitleEmphasis = 'low' | 'medium' | 'high';

export type CaptionSize = 'sm' | 'md' | 'lg';
export type CaptionScheme = SurfaceType;
export type CaptionWeight = '1' | '2' | '3' | '4' | '5';
export type CaptionVariant = 'default' | 'gradient' | 'outlined';
export type CaptionEmphasis = 'low' | 'medium' | 'high';

export type TextSize = 'sm' | 'md' | 'lg' | 'xl';
export type TextScheme = SurfaceType;
export type TextWeight = '1' | '2' | '3' | '4' | '5';
export type TextVariant = 'default' | 'gradient' | 'outlined';
export type TextEmphasis = 'low' | 'medium' | 'high';

export type FontSizeToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FontWeightToken = 1 | 2 | 3 | 4 | 5;

export type SurfaceType = 'primary' | 'secondary' | 'accent';
export type SurfaceState = 'base' | 'interactive' | 'disabled' | 'loading';
export type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5;
export type SurfaceToken = `surface-${SurfaceType}-${SurfaceState}-${SurfaceLevel}`;

export type SecSchemeType = SurfaceType;
export type SecSchemeMods = 'elevated';
export type SecScheme = SecSchemeType | `${SecSchemeType}-${SecSchemeMods}`;

export type DividerScheme = SurfaceType;
export type DividerPosition = 'center' | Alignment;

export interface SpacingProps {
  gap?: SpacingToken | undefined;
  px?: SpacingToken | undefined;
  py?: SpacingToken | undefined;
  mx?: SpacingToken | undefined;
  my?: SpacingToken | undefined;
}

export interface ThemeProps extends SpacingProps {
  cols?: number | undefined;
  fz?: FontSizeToken | undefined;
  fw?: FontWeightToken | undefined;
}

export interface SurfaceConfig {
  type: SurfaceType;
  state: SurfaceState;
  level: SurfaceLevel;
}

export interface TokenConfig {
  key: string;
  value?: string;
}

export interface TokenStyleConfig {
  value?: string;
  prop: keyof React.CSSProperties | (keyof React.CSSProperties)[];
  key: string;
}