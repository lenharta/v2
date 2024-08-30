import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { mergeProps } from '@/core/utils';
import { createPolymorphicFactory } from '@/factory';
import { ButtonProvider } from '../context';
import { ButtonGroupProps } from '../types';

export type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const defaultProps: ButtonGroupProps = {
  orientation: 'horizontal',
};

export const ButtonGroup = createPolymorphicFactory<ButtonGroupFactory>(
  ({ component = 'div', ...props }, ref) => {
    const {
      size,
      value,
      align,
      justify,
      variant,
      loading,
      disabled,
      readOnly,
      children,
      className,
      orientation,
      ...forwardedProps
    } = mergeProps(props, defaultProps);

    return (
      <Group
        {...forwardedProps}
        className={clsx('v2-button-group', className)}
        orientation={orientation}
        component={component}
        ref={ref}
      >
        <ButtonProvider
          value={{
            size,
            value,
            align,
            justify,
            variant,
            loading,
            disabled,
            readOnly,
            orientation,
          }}
        >
          {children}
        </ButtonProvider>
      </Group>
    );
  }
);

ButtonGroup.displayName = '@v2/Button.Group';
