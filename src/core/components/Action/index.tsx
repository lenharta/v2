import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ActionGroup } from '@/core/components/Action/Group';
import { UnstyledButton } from '@/core/components';

interface ActionProps {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean | undefined;
}

interface ActionComponents {
  Group: typeof ActionGroup;
}

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: ActionProps;
  comps: ActionComponents;
}>;

const Action = factory<ActionFactory>((props, ref) => {
  const { icon, label, disabled, className, ...forwardedProps } = props;

  return (
    <UnstyledButton
      ref={ref}
      {...forwardedProps}
      data-disabled={disabled}
      aria-disabled={disabled}
      aria-label={label}
      className={clsx('v2-action', className)}
      children={icon}
    />
  );
});

Action.displayName = '@v2/Action';
Action.Group = ActionGroup;
export { Action, type ActionProps };
