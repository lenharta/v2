import clsx from 'clsx';
import { Group } from '@core';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { ButtonProvider } from '../context';
import { ButtonGroupProps } from '../types';

type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const ButtonGroup = createFactory<ButtonGroupFactory>((props, ref) => {
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
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <Group
      ref={ref}
      orientation={orientation}
      className={clsx('v2-button-group', className)}
      {...forwardedProps}
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
});

ButtonGroup.displayName = '@v2/Button.Group';
export { ButtonGroup };
