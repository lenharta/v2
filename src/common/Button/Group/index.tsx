import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Orientation } from '@/types/common';

type ButtonGroupElementProps = React.ComponentPropsWithoutRef<'div'>;
type ButtonGroupRefProps = React.RefAttributes<HTMLDivElement>;
type ButtonGroupBaseProps = ButtonGroupElementProps & ButtonGroupRefProps;

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  orientation?: Orientation;
}

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'vertical',
};

function _ButtonGroup(props: ButtonGroupProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { orientation, className, ...otherProps } = props;
  const clxss = clsx('button-group', className);
  const _props = mergeProps({ orientation }, defaultProps);
  return (
    <div
      {...otherProps}
      ref={ref}
      role="group"
      data-orientation={_props.orientation}
      aria-orientation={_props.orientation}
      className={clxss}
    />
  );
}

export type ButtonGroupComponent = React.ForwardRefExoticComponent<ButtonGroupProps>;
export const ButtonGroup = React.forwardRef(_ButtonGroup) as ButtonGroupComponent;
