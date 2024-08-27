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
    gap,
    icon,
    value,
    variant,
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
      gap={gap}
      className={clsx('v2-action-group', className)}
      orientation={orientation}
      {...forwardedProps}
    >
      <ActionProvider value={{ icon, value, disabled, loading, variant, readOnly, orientation }}>
        {children}
      </ActionProvider>
    </Group>
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup };
