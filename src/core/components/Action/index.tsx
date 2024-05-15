import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '../UnstyledButton';
import { ActionGroup } from './Group';

interface ActionProps {
  icon: React.ReactNode;
  label: string;
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
  const { icon, label, className, ...forwardedProps } = props;

  return (
    <UnstyledButton
      ref={ref}
      {...forwardedProps}
      children={<div>{icon}</div>}
      className={clsx('v2-action', className)}
      aria-label={label}
    />
  );
});

Action.displayName = '@v2/Action';
Action.Group = ActionGroup;
export { Action, type ActionProps };
