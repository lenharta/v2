import { ActionContext } from './Action.types';
import { createSafeContext } from '@/core/utils';

const [ActionProvider, useActionContext] = createSafeContext<ActionContext>(
  '[@v2/core/components/Action]: component not found in context tree.'
);

export { ActionProvider, useActionContext };
