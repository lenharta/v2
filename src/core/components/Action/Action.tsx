import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton } from '@/core';
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
  const { icon, value, loading, disabled, readOnly, selected, className, ...forwardedProps } =
    props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        loading: loading || ctx.loading,
        selected: selected || (!!ctx.value && value === ctx.value) || undefined,
        disabled: disabled || ctx.disabled,
        readOnly: readOnly || ctx.readOnly,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
        className: clsx('v2-action', className),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      loading={loading}
      readOnly={readOnly}
      disabled={disabled}
      selected={selected}
      className={clsx('v2-action', className)}
      {...forwardedProps}
      {...contextProps}
    >
      {icon}
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action };
