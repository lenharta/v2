import { createSafeContext } from '@/core';
import { FloatingContext } from './Floating.types';

const [FloatingProvider, useFloatingContext] = createSafeContext<FloatingContext>(
  '[@v2/core/components/Floating.context]: could not locate component in context tree'
);

export { FloatingProvider, useFloatingContext };
