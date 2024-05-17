import { createSafeContext } from '@/core/utils';
import { Core } from '@/types';

interface ActionContextValue {
  value?: string | undefined;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation;
  getActionId: () => string;
}

const [ActionProvider, useActionContext] = createSafeContext<ActionContextValue>(
  '[@v2/core/components/Action]: component not found in context tree.'
);

export { ActionProvider, useActionContext, type ActionContextValue };
