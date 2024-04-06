import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { ButtonGroupContextValue, ButtonGroupProvider } from '@/core/Button/context';

export interface ButtonGroupProps extends Core.GroupProps, ButtonGroupContextValue {}

export type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

export const ButtonGroup = factory<ButtonGroupFactory>((props, ref) => {
  const {
    size,
    variant,
    loading,
    disabled,
    children,
    className,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      aria-orientation={orientation}
      className={clsx('button-group', className)}
      role="group"
      ref={ref}
    >
      <ButtonGroupProvider value={{ size, variant, disabled, loading }}>
        {children}
      </ButtonGroupProvider>
    </div>
  );
});

ButtonGroup.displayName = '@v2/core/Button.Group';
