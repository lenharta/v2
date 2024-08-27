import { FloatingContext } from './types';
import { createSafeContext } from '@/utils';

const [FloatingProvider, useFloatingContext] = createSafeContext<FloatingContext>(
  '[@v2/core/components/Floating.context]: could not locate component in context tree'
);

export { FloatingProvider, useFloatingContext };
