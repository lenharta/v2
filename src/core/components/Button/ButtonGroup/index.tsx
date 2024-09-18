import clsx from 'clsx';
import { Core } from '@/types';
import { Group } from '@/core';
import { PolymorphicComponent } from '@/factory';
import { ButtonProvider } from '../ButtonContext';

export type ButtonGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ButtonGroupProps;
  element: 'div';
}>;

export const ButtonGroup = PolymorphicComponent<ButtonGroupFactory>(
  (
    {
      gap,
      value,
      align,
      justify,
      children,
      className,
      isLoading,
      isDisabled,
      isReadonly,
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
        className={clsx('v2-button-group', className)}
        orientation={orientation}
        component={component}
        gap={gap}
        ref={ref}
      >
        <ButtonProvider
          value={{
            value,
            align,
            justify,
            isLoading,
            isReadonly,
            isDisabled,
            orientation,
            onValueChange,
          }}
        >
          {children}
        </ButtonProvider>
      </Group>
    );
  }
);

ButtonGroup.displayName = '@v2/Button.Group';
