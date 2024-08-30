import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';
import { Icon, UnstyledButton } from '@/core';
import { ActionGroup } from './ActionGroup';
import { ActionSpacer } from './ActionSpacer';
import { useActionContext } from './ActionContext';
import { createEventCallback } from '@/utils';

export interface ActionComponents {
  Group: typeof ActionGroup;
  Spacer: typeof ActionSpacer;
}

export type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  props: Core.ActionProps;
  comps: ActionComponents;
  omits: 'children';
  comp: 'button';
}>;

const css: Record<'root', string> = {
  root: 'v2-action',
};

export const Action = createFactory<ActionFactory>((props, ref) => {
  const {
    size = 'md',
    icon = { type: 'outline' },
    value,
    variant = 'default',
    loading,
    disabled,
    readOnly,
    selected,
    className,
    onChange,
    ...forwardedProps
  } = props;

  const context = useActionContext();

  const contextClassNames = context
    ? [`${css.root}--${size || context.size}`, `${css.root}--${variant || context.variant}`]
    : [];

  const handleChange = () => {
    if (
      !(loading || context.loading) &&
      !(readOnly || context.readOnly) &&
      !(disabled || context.disabled)
    ) {
      if (!value || !context.value) {
        console.error('[@/core/Action]: A value must be provided to Action -or- Action.Context');
      } else {
        context.onValueChange?.(value || context.value);
      }
    }
  };

  const contextProps = context
    ? {
        selected: selected || value === context.value || undefined,
        disabled: disabled || context.disabled || undefined,
        readOnly: readOnly || context.readOnly || undefined,
        loading: loading || context.loading || undefined,
        'data-orientation': context.orientation,
        'aria-orientation': context.orientation,
      }
    : {
        selected: selected || undefined,
        disabled: disabled || undefined,
        readOnly: readOnly || undefined,
        loading: loading || undefined,
      };

  return (
    <UnstyledButton
      {...forwardedProps}
      {...contextProps}
      className={clsx(css.root, contextClassNames, className)}
      onChange={createEventCallback(onChange, handleChange)}
      value={value}
      ref={ref}
    >
      <Icon {...icon} />
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
