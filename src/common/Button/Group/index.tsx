import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Orientation } from '@/types/common';

type ButtonGroupBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  orientation?: Orientation;
}

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'vertical',
};

function _ButtonGroup(props: ButtonGroupProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { orientation, className, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('button-group', className);
  return (
    <div
      {...otherProps}
      ref={ref}
      role="group"
      className={clxss}
      data-orientation={orientation}
      aria-orientation={orientation}
    />
  );
}

export const ButtonGroup = React.forwardRef(_ButtonGroup) as React.ForwardRefExoticComponent<
  ButtonGroupProps & React.RefAttributes<HTMLDivElement>
>;

ButtonGroup.displayName = '@v2/Button.Group';
