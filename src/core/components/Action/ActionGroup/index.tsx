import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { factory } from '../../../factory';
import { ActionGroupProps } from '../Action.types';
import { ActionProvider } from '../Action.context';

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const { children, className, variant, navigate, ...forwardedProps } = props;
  return (
    <Group ref={ref} className={clsx('v2-action-group', className)} {...forwardedProps}>
      <ActionProvider value={{ variant, navigate }}>{children}</ActionProvider>
    </Group>
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup };
