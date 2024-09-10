import { Core } from '@/types';
import { createSafeContext } from '@/utils';

export const [FloatingProvider, useFloatingContext] = createSafeContext<Core.FloatingContext>(
  '[@v2/core/components/Floating.context]: could not locate component in context tree'
);
