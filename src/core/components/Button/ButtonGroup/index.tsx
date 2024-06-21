import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ButtonProvider } from '../Button.context';
import { ButtonGroupProps } from '../Button.types';

type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const ButtonGroup = createFactory<ButtonGroupFactory>((props, ref) => {
  const {
    gap = 'default',
    size = 'md',
    value,
    radius = 'default',
    variant = 'elevated',
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
      orientation={orientation}
      className={clsx('v2-button-group', className)}
      {...forwardedProps}
    >
      <ButtonProvider
        value={{ variant, size, radius, value, loading, disabled, readOnly, orientation }}
      >
        {children}
      </ButtonProvider>
    </Group>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
export { ButtonGroup };
