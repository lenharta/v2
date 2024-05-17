import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ActionGroup } from '@/core/components/Action/Group';
import { UnstyledButton } from '@/core/components';
import { ActionSpacer } from './Spacer';
import { useActionContext } from './context';

interface ActionProps {
  label: string;
  icon?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
}

interface ActionComponents {
  Group: typeof ActionGroup;
  Spacer: typeof ActionSpacer;
}

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: ActionProps;
  comps: ActionComponents;
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
      aria-orientation={ctx.orientation}
      data-orientation={ctx.orientation}
      aria-disabled={isDisabledValue || undefined}
      data-disabled={isDisabledValue || undefined}
      aria-selected={(isValueGroup && isSelectedValue) || undefined}
      data-selected={(isValueGroup && isSelectedValue) || undefined}
      className={clsx('v2-action', className)}
      children={icon}
      title={label}
      ref={ref}
    />
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action, type ActionProps };
