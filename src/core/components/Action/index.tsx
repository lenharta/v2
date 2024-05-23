import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ActionProps } from './Action.types';
import { ActionGroup } from './Group';
import { ActionSpacer } from './Spacer';
import { UnstyledButton } from '@/core/components';
import { useActionContext } from './Action.context';

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: ActionProps;
  comps: {
    Group: typeof ActionGroup;
    Spacer: typeof ActionSpacer;
  };
}>;

const Action = factory<ActionFactory>((props, ref) => {
  const { icon, label, value, disabled, selected, className, ...forwardedProps } = props;

  const ctx = useActionContext();

  const isValueGroup = !!ctx.value || undefined;
  const isSelectedValue = ctx.value === value || !!selected;
  const isDisabledValue = ctx.disabled || disabled;

  let uid: string = '';
  const actionId = ctx.getActionId();

  if (forwardedProps.id && !actionId) {
    uid = forwardedProps.id;
  }
  if (!forwardedProps.id && actionId) {
    uid = actionId;
  }
  if (forwardedProps.id && actionId) {
    uid = [actionId, forwardedProps.id].join(' ');
  }

  return (
    <UnstyledButton
      {...forwardedProps}
      id={uid || undefined}
      aria-label={label}
      aria-disabled={isDisabledValue || undefined}
      aria-selected={(isValueGroup && isSelectedValue) || undefined}
      data-selected={(isValueGroup && isSelectedValue) || undefined}
      data-disabled={isDisabledValue || undefined}
      data-orientation={ctx.orientation}
      className={clsx('v2-action', className)}
      children={icon}
      value={value}
      title={label}
      ref={ref}
    />
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action, type ActionProps };
