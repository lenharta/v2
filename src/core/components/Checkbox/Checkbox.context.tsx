import { CheckboxContext } from './Checkbox.types';
import { createSafeContext } from '@/core/utils';

const [CheckboxProvider, useCheckboxContext] = createSafeContext<CheckboxContext>(
  '[@v2/core/Checkbox.context]: could not locate component in context tree'
);

export { CheckboxProvider, useCheckboxContext };
