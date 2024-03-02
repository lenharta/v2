export type Axis = 'x' | 'y';
export type Side = 'top' | 'right' | 'bottom' | 'left';
export type Align = 'start' | 'end';
export type AlignPlacement = `${Side}-${Align}`;
export type Placement = Side | AlignPlacement;

export type Length = 'width' | 'height';
export type Coords = { [Key in Axis]: number };
export type SideObject = { [Key in Side]: number };
export type Dimensions = { [Key in Length]: number };
export type Rect = Coords & Dimensions;

export const lookupInverseSide = {
  top: 'bottom',
  left: 'right',
  right: 'left',
  bottom: 'top',
};

export const lookupInverseAlignment = {
  end: 'start',
  start: 'end',
};

export function getSideFromPlacement(placement: Placement): Side {
  return placement.split('-')[0] as Side;
}

export function getAlignFromPlacement(placement: Placement): Align {
  return placement.split('-')[1] as Align;
}

export function getAxisInverse(axis: Axis): Axis {
  return axis === 'x' ? 'y' : 'x';
}

export function getAxisLength(axis: Axis): Length {
  return axis === 'x' ? 'width' : 'height';
}

export function clamp(start: number, value: number, end: number): number {
  return Math.max(start, Math.min(value, end));
}
