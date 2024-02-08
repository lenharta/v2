import { Align, Justify, Size } from '@/types';
import clsx from 'clsx';
import * as React from 'react';

export type ButtonBaseProps = React.JSX.IntrinsicElements['button'];

type ButtonStyle = 'solid' | 'outlined';
type ButtonScheme = 'primary' | 'secondary';
type ButtonVariant = `${ButtonStyle}-${ButtonScheme}`;

export interface ButtonProps extends ButtonBaseProps {
  size?: Size;
  align?: Align;
  justify?: Justify;
  variant?: ButtonVariant;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'sm',
    align = 'center',
    justify = 'center',
    variant = 'solid-primary',
    children,
    leftContent,
    rightContent,
    ...otherProps
  } = props;

  const clxss = clsx(`button button--${variant}`, {
    [`button--size-${size}`]: size,
    [`button--align-${align}`]: align,
    [`button--justify-${justify}`]: justify,
  });

  return (
    <button {...otherProps} ref={ref} className={clxss}>
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </button>
  );
});
