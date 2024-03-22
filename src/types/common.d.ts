export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizeCompact = 'sm' | 'md' | 'lg';

export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Sizes = Size | SizeCompact | SizeExpanded;

export type CaptionSize = 'sm' | 'md' | 'lg';

export type SubtitleSize = 'sm' | 'md' | 'lg';

export type TitleSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Weight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

export type Emphasis = 'low' | 'med' | 'hgh' | 'max';

export type Border = 'sm' | 'md' | 'lg';

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Orientation = 'horizontal' | 'vertical';

export type Scheme = 'primary' | 'secondary' | 'accent';

export type Axis = 'x' | 'y';

export type Side = 'top' | 'left' | 'right' | 'bottom';

export type Length = 'width' | 'height';

export type Alignment = 'start' | 'end';

export type Position = `${Side}-${Alignment}`;

export type Placement = Side | Position;

export type Coords = { [key in Axis]: number };

export type Dimensions = { [key in Length]: number };

export type SideObject = { [key in Side]: number };

export type ClientRect = Rect & SideObject;

export type Rect = Coords & Dimensions;

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TitleLevelProps = Record<TitleLevel, boolean>;

export type SurfaceType = 'primary' | 'secondary' | 'accent';

export type SurfaceState = 'base' | 'interactive';

export type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type SurfaceToken = `surface-${SurfaceType}-${SurfaceState}-${SurfaceLevel}`;

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
  prop: keyof React.CSSProperties;
  key: string;
}