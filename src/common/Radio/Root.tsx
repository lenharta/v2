import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import { useSurface } from '@/hooks';
import { RadioRootComponent } from '@/types';
import { createEventCallback } from '../utils';

export const Radio: RadioRootComponent = React.forwardRef((props, ref) => {
  const {
    id,
    size = 'sm',
    align = 'center',
    justify = 'start',
    info,
    error,
    label,
    style,
    disabled,
    readonly,
    children,
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const [hover, setHover] = React.useState(false);

  const isHovered = hover !== false;
  const isDisabled = disabled !== undefined;
  const isReadonly = readonly !== undefined;

  const clxss = clsx(
    'Radio',
    `Radio--size-${size}`,
    `Radio--align-${align}`,
    `Radio--justify-${justify}`,
    className
  );

  const surface = React.useCallback(
    () =>
      useSurface({
        state: { hover, disabled },
        values: [
          { prop: 'backgroundColor', token: 'secondary', alpha: 0, step: 0.03 },
          { prop: 'color', token: 'secondary', alpha: 0.95, step: 0 },
        ],
      }),
    [hover, disabled]
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-hovered={isHovered}
      data-disabled={isDisabled}
      data-readonly={isReadonly}
      aria-disabled={isDisabled}
      aria-readonly={isReadonly}
      style={{ ...style, ...surface() }}
      onMouseLeave={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHover(false),
        state: { disabled, readonly },
      })}
      onMouseEnter={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseEnter,
        handler: () => setHover(true),
        state: { disabled, readonly },
      })}
    >
      {children}
      <div className="Radio-content">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
