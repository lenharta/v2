import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import { useSurface } from '@/hooks';
import { SwitchRootComponent } from '@/types';
import { createEventCallback } from '../utils';

export const Switch: SwitchRootComponent = React.forwardRef((props, ref) => {
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
    readOnly,
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
  const isReadOnly = readOnly !== undefined;

  const clxss = clsx(
    'Switch',
    { [`Switch--size-${size}`]: size },
    { [`Switch--align-${align}`]: align },
    { [`Switch--justify-${justify}`]: justify },
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
      data-readonly={isReadOnly}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      style={{ ...style, ...surface() }}
      onMouseLeave={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseLeave,
        handler: () => setHover(false),
        state: { disabled, readOnly },
      })}
      onMouseEnter={createEventCallback<HTMLButtonElement, MouseEvent>({
        callback: otherProps.onMouseEnter,
        handler: () => setHover(true),
        state: { disabled, readOnly },
      })}
    >
      {children}
      <div className="Switch-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
