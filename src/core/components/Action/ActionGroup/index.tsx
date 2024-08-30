import clsx from 'clsx';
import { Group } from '@/core';
import { Core, Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { ActionProvider } from '../ActionContext';

export type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: Core.ActionGroupProps;
  comp: 'div';
}>;

const css: Record<'root', string> = {
  root: 'v2-action-group',
};

export const ActionGroup = createPolymorphicFactory<ActionGroupFactory>((props, ref) => {
  const {
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
    ...forwardedProps
  } = props;

  return (
    <Group
      {...forwardedProps}
      className={clsx(css.root, className)}
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
});

ActionGroup.displayName = '@v2/Action.Group';
