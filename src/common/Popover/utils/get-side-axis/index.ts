import { Axis, Placement } from '@/types/common';
import { getSide } from '../get-side';

export const getSideAxis = (placement: Placement): Axis => {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
};
