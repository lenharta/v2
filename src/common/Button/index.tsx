import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import type { Core } from '@/types/core';
import type { Align, Justify, Size, Border } from '@/types/common';

export type ButtonProps = {
  size?: Size;
  align?: Align;
  border?: Border;
  justify?: Justify;
  readOnly?: boolean;
  disabled?: boolean;
  scheme?: 'primary' | 'secondary' | 'accent-low' | 'accent-med' | 'accent-high';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export type ButtonFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: ButtonProps;
  component: 'button';
}>;

const defaultProps: Partial<ButtonProps> = {
  size: 'sm',
  align: 'center',
  scheme: 'primary',
  justify: 'start',
};

export const Button: ButtonFactory = React.forwardRef((props, ref) => {
  const {
    size,
    align,
    border,
    scheme,
    justify,
    readOnly,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const theme = useThemeCTX();

  const mergedProps = mergeProps(
    { size, align, justify, scheme, readOnly, disabled },
    defaultProps
  );

  const clxss = clsx(
    'Button',
    { [`Button--size-${mergedProps.size}`]: mergedProps.size },
    { [`Button--align-${mergedProps.align}`]: mergedProps.align },
    { [`Button--scheme-${mergedProps.scheme}`]: mergedProps.scheme },
    { [`Button--justify-${mergedProps.justify}`]: mergedProps.justify },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-disabled={disabled}
      data-readonly={readOnly}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-direction={theme.state.dir}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});
