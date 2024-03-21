import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonProvider } from '../context';
import { Orientation, ElementProps } from '@/types';

export interface ButtonGroupProps extends ElementProps<'div'> {
  orientation?: Orientation;
}

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { orientation, children, className, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <div
      {...otherProps}
      ref={ref}
      role="group"
      className="button-group"
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <ButtonProvider value={{ orientation }}>{children}</ButtonProvider>
    </div>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
