import { Axis, Placement } from '@/types/common';
import { getAxisInverse } from '../get-axis-inverse';
import { getSideAxis } from '../get-side-axis';

export const getAlignmentAxis = (placement: Placement): Axis => {
  return getAxisInverse(getSideAxis(placement)) as Axis;
};
