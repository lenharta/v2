import { Accent } from './store';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizeCompact = 'sm' | 'md' | 'lg';

export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Weight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

export type Border = 'sm' | 'md' | 'lg';

export type Align = 'center' | 'start' | 'end';

export type Justify = 'center' | 'start' | 'end';

export type Position = 'top' | 'left' | 'right' | 'bottom';

export type Placement = Position | `${Position}-${Align}`;

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Orientation = 'horizontal' | 'vertical';

export type IndexLevel = 'app' | 'modal' | 'popover' | 'overlay' | 'max';
