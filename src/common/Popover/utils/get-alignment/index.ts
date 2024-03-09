import { Alignment, Placement } from '@/types/common';

export const getAlignment = (placement: Placement): Alignment | undefined => {
  return placement.split('-')[1] as Alignment | undefined;
};
