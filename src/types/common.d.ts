export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});

export type Align = 'center' | 'start' | 'end' | (string & {});

export type Justify = 'center' | 'start' | 'end' | (string & {});

export type Position = 'top' | 'left' | 'right' | 'bottom' | (string & {});

export type Placement = Position | `${Position}-${Align}` | (string & {});

export type Direction = 'up' | 'down' | 'left' | 'right' | (string & {});

export type Orientation = 'vertical' | 'horizontal' | (string & {});

export type Scheme = 'primary' | 'secondary' | (string & {});
