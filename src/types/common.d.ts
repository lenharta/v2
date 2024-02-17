import { Accent } from './store';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Border = 'sm' | 'md' | 'lg';

export type Align = 'center' | 'start' | 'end';

export type Justify = 'center' | 'start' | 'end';

export type Position = 'top' | 'left' | 'right' | 'bottom';

export type Placement = Position | `${Position}-${Align}`;

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Orientation = 'horizontal' | 'vertical';

export type SurfaceToken = 'primary' | 'secondary' | Accent | 'disabled' | 'readOnly';

export type SurfaceType = 'state' | 'neutral' | 'accent';
