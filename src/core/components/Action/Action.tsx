import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Icon, UnstyledButton } from '@/core';

import { ActionProps } from './types';
import { ActionGroup } from './ActionGroup';
import { ActionSpacer } from './ActionSpacer';
import { useActionContext } from './context';

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
  omits: 'children';
  comps: {
    Group: typeof ActionGroup;
    Spacer: typeof ActionSpacer;
  };
}>;

const Action = createFactory<ActionFactory>((props, ref) => {
  const {
    icon,
    value,
    variant,
    loading,
    disabled,
    readOnly,
    selected,
    className,
    ...forwardedProps
  } = props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        loading: !!ctx.loading || !!loading || undefined,
        disabled: !!ctx.disabled || !!disabled || undefined,
        readOnly: !!ctx.readOnly || !!readOnly || undefined,
        selected: (!!ctx.value && value === ctx.value) || !!selected || undefined,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      loading={!!loading || undefined}
      readOnly={!!readOnly || undefined}
      disabled={!!disabled || undefined}
      selected={!!selected || undefined}
      className={clsx(
        'v2-action',
        `v2-action--${variant || ctx.variant || 'base-elevated'}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      <Icon {...icon} />
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action };
