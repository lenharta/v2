import { Axis, Length } from '@/types/common';

export const getAxisLength = (axis: Axis): Length => {
  return axis === 'x' ? 'width' : 'height';
};
