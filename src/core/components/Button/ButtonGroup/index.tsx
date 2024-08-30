import clsx from 'clsx';
import { Group } from '@/core';
import { Core, Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { ButtonProvider } from '../ButtonContext';

export type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: Core.ButtonGroupProps;
  comp: 'div';
}>;

const css: Record<'root', string> = {
  root: 'v2-Button-group',
};

export const ButtonGroup = createPolymorphicFactory<ButtonGroupFactory>((props, ref) => {
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
      <ButtonProvider value={{ value, disabled, loading, readOnly, orientation, onValueChange }}>
        {children}
      </ButtonProvider>
    </Group>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
