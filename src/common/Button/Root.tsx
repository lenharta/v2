import * as React from 'react';
import { useSurface } from '@/hooks';
import { ButtonRootComponent } from '@/types';
import { createEventCallback } from '../utils';
import clsx from 'clsx';

export const Button: ButtonRootComponent = React.forwardRef((props, ref) => {
  const {
    size = 'sm',
    align = 'center',
    scheme = 'secondary',
    justify = 'start',
    accent,
    readonly,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const [hover, setHover] = React.useState(false);
  const token = scheme || accent;

  const surface = React.useCallback(
    () =>
      useSurface({
        state: { hover, disabled },
        values: [
          { prop: 'backgroundColor', token, alpha: 0.05, step: 0.03 },
          { prop: 'color', token, alpha: 0.9, step: 0 },
        ],
      }),
    [hover, disabled]
  );

  const clxss = clsx(
    'Button',
    { [`Button--size-${size}`]: size },
    { [`Button--align-${align}`]: align },
    { [`Button--justify-${justify}`]: justify },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      style={{ ...surface() }}
      disabled={disabled}
      className={clxss}
      data-disabled={disabled}
      data-readonly={readonly}
      onMouseLeave={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHover(false),
        state: { disabled, readonly },
      })}
      onMouseOver={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseOver,
        handler: () => setHover(true),
        state: { disabled, readonly },
      })}
    >
      {children}
    </Component>
  );
});
