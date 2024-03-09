import { Placement, Side } from '@/types/common';

export const getSide = (placement: Placement): Side => {
  return placement.split('-')[0] as Side;
};
