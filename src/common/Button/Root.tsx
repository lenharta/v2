import clsx from 'clsx';
import * as React from 'react';
import { Surface } from '../Surface';
import { useToken } from '@/hooks';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
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

const defaultProps: Partial<ButtonProps> = {
  size: 'sm',
  align: 'center',
  justify: 'start',
  surface: 'primary',
};

export const Button: ButtonFactory = React.forwardRef((props, ref) => {
  const {
    size,
    align,
    border,
    justify,
    surface,
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
    { size, align, justify, surface, readOnly, disabled },
    defaultProps
  );

  const token = useToken({
    surfaceId: 'Button',
    surface: mergedProps.surface,
    disabled: mergedProps.disabled,
    readOnly: mergedProps.readOnly,
    mode: theme.state.mode,
  });

  const baseSurfaceConfig = token.base(border !== undefined);
  const hoverSurfaceConfig = token.hover(border !== undefined);

  const clxss = clsx(
    'Button',
    { [`Button--size-${mergedProps.size}`]: mergedProps.size },
    { [`Button--align-${mergedProps.align}`]: mergedProps.align },
    { [`Button--justify-${mergedProps.justify}`]: mergedProps.justify },
    token.clxss,
    className
  );

  return (
    <>
      <Surface
        selector={token.clxss}
        baseConfig={baseSurfaceConfig}
        hoverConfig={hoverSurfaceConfig}
      />
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
    </>
  );
});
