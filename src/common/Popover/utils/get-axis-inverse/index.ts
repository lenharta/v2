import { Axis } from '@/types/common';

export const getAxisInverse = (axis: Axis): Axis => {
  return axis === 'x' ? 'y' : 'x';
};
