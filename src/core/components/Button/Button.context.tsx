import { ButtonContext } from './Button.types';
import { createSafeContext } from '@/core/utils';

const [ButtonProvider, useButtonContext] = createSafeContext<ButtonContext>(
  '[@v2/core/Button/Button.context]: could not locate component in context tree'
);

export { ButtonProvider, useButtonContext };
