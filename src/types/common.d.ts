export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizeCompact = 'sm' | 'md' | 'lg';

export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Weight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

export type Emphasis = 'low' | 'med' | 'hgh' | 'max';

export type Border = 'sm' | 'md' | 'lg';

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Orientation = 'horizontal' | 'vertical';

export type IndexLevel = 'app' | 'modal' | 'popover' | 'overlay' | 'max';

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

export type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type SurfaceState = 'base' | 'interactive';

export type SurfaceVariant = 'primary' | 'secondary' | 'accent';

export type SurfaceToken = `${SurfaceVariant}-${SurfaceState}-${SurfaceLevel}`;

export interface SurfaceOptions {
  level?: SurfaceLevel;
  state?: SurfaceState;
  variant?: SurfaceVariant;
  inverted?: boolean;
}
