import clsx from 'clsx';
import * as React from 'react';
import { Surface } from '../Surface';
import { findTokenState, surfaceToken } from '../utils';
import { generateRandomId } from '@/utils';
import type { Core } from '@/types/core';
import type { SurfaceToken, Align, Justify, Size, Border } from '@/types/common';

export type ButtonProps = {
  size?: Size;
  align?: Align;
  border?: Border;
  justify?: Justify;
  surface?: SurfaceToken;
  readOnly?: boolean;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export type ButtonFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: ButtonProps;
  component: 'button';
}>;

export const Button: ButtonFactory = React.forwardRef((props, ref) => {
  const {
    size = 'sm',
    align = 'center',
    border,
    justify = 'start',
    surface = 'primary',
    readOnly,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const token = {
    clxss: `Button--${generateRandomId(8)}`,
    value: findTokenState({ token: surface, disabled, readOnly }),
    alphaStep: surface !== ('primary' || 'secondary') ? 0.06 : 0.03,
    alphaBgd: surface !== ('primary' || 'secondary') ? 0.2 : 0.05,
    alphaBdr: border !== undefined ? 0.4 : 0,
  };

  const clxss = clsx(
    'Button',
    { [`Button--size-${size}`]: size },
    { [`Button--align-${align}`]: align },
    { [`Button--justify-${justify}`]: justify },
    token.clxss,
    className
  );

  return (
    <>
      <Surface
        selector={token.clxss}
        baseConfig={{
          color: surfaceToken(token.value, 1),
          borderColor: surfaceToken(token.value, token.alphaBdr),
          backgroundColor: surfaceToken(token.value, token.alphaBgd),
        }}
        hoverConfig={{
          color: surfaceToken(token.value, 1),
          borderColor: surfaceToken(token.value, token.alphaBdr),
          backgroundColor: surfaceToken(token.value, token.alphaBgd + token.alphaStep),
        }}
      />
      <Component
        {...otherProps}
        ref={ref}
        className={clxss}
        data-disabled={disabled}
        data-readonly={readOnly}
        aria-disabled={disabled}
        aria-readonly={readOnly}
      >
        {children}
      </Component>
    </>
  );
});
