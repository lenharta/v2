import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonProvider } from '../context';
import type { Core } from '@/types/core';
import type { Align, Justify, Orientation, Size } from '@/types/common';

export type ButtonGroupProps = {
  size?: Size;
  align?: Align;
  justify?: Justify;
  orientation?: Orientation;
};

export type ButtonGroupFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: ButtonGroupProps;
  component: 'div';
}>;

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroup: ButtonGroupFactory = React.forwardRef((props, ref) => {
  const {
    size,
    align,
    justify,
    children,
    className,
    orientation,
    component: Component = 'div',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ orientation }, defaultProps);
  const clxss = clsx('ButtonGroup', className);

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-orientation={mergedProps.orientation}
      aria-orientation={mergedProps.orientation}
    >
      <ButtonProvider value={{ size, align, justify, orientation: 'horizontal' }}>
        {children}
      </ButtonProvider>
    </Component>
  );
});
