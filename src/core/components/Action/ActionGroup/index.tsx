import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ActionProvider } from '../context';
import { ActionGroupProps } from '../types';

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = createFactory<ActionGroupFactory>((props, ref) => {
  const {
    icon,
    value,
    loading,
    disabled,
    readOnly,
    children,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <Group
      ref={ref}
      className={clsx('v2-action-group', className)}
      orientation={orientation}
      {...forwardedProps}
    >
      <ActionProvider value={{ icon, value, disabled, loading, readOnly, orientation }}>
        {children}
      </ActionProvider>
    </Group>
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup };
