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

export type IconProp = { icon?: IconName | undefined };

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type SubtitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type FontSizeToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FontWeightToken = 1 | 2 | 3 | 4 | 5;