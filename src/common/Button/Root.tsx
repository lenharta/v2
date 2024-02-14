import clsx from 'clsx';
import * as React from 'react';

import { Surface } from '../Surface';
import { generateRandomId } from '@/utils';
import { findTokenState, surfaceToken } from '../utils';
import { ButtonRootComponent } from '@/types';

export const Button: ButtonRootComponent = React.forwardRef((props, ref) => {
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
    value: findTokenState({ token: surface, disabled, readOnly }),
    clxss: `Button--${generateRandomId(8)}`,
    alpha: {
      bdr: border !== undefined ? 0.4 : 0,
      bg: surface !== ('primary' || 'secondary') ? 0.2 : 0.08,
    },
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
          borderColor: surfaceToken(token.value, token.alpha.bdr),
          backgroundColor: surfaceToken(token.value, token.alpha.bg),
        }}
        hoverConfig={{
          color: surfaceToken(token.value, 1),
          borderColor: surfaceToken(token.value, token.alpha.bdr),
          backgroundColor: surfaceToken(token.value, token.alpha.bg + 0.05),
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
