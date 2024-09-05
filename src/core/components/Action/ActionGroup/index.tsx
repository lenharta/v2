import clsx from 'clsx';
import { Core } from '@/types';
import { Group } from '@/core';
import { PolymorphicComponent } from '@/factory';
import { ActionProvider } from '../ActionContext';

export type ActionGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ActionGroupProps;
  element: 'div';
}>;

export const ActionGroup = PolymorphicComponent<ActionGroupFactory>(
  (
    {
      gap,
      value,
      loading,
      readOnly,
      disabled,
      children,
      className,
      component = 'div',
      orientation = 'horizontal',
      onValueChange,
      ...props
    },
    ref
  ) => {
    return (
      <Group
        {...props}
        className={clsx('v2-action-group', className)}
        orientation={orientation}
        component={component}
        gap={gap}
        ref={ref}
      >
        <ActionProvider value={{ value, disabled, loading, readOnly, orientation, onValueChange }}>
          {children}
        </ActionProvider>
      </Group>
    );
  }
);

ActionGroup.displayName = '@v2/Action.Group';
