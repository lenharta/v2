import { createSafeContext } from '@/utils';
import { ChipContext } from './types';

const [ChipProvider, useChipContext] = createSafeContext<ChipContext>(
  '[@v2/core/Chip]: could not locate component in context tree.'
);

export { ChipProvider, useChipContext };
