import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import { useSurface } from '@/hooks';
import { CheckboxRootComponent } from '@/types';
import { createEventCallback } from '../utils';
import { CheckboxIndicator } from './Indicator';

export const Checkbox: CheckboxRootComponent = React.forwardRef((props, ref) => {
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

  const clxss = clsx(
    'Checkbox',
    { [`Checkbox--size-${size}`]: size },
    { [`Checkbox--align-${align}`]: align },
    { [`Checkbox--justify-${justify}`]: justify },
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
      data-error={error !== undefined}
      data-hovered={hover !== undefined}
      data-disabled={disabled}
      data-readonly={readOnly}
      aria-disabled={disabled}
      aria-readonly={readOnly}
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
      <CheckboxIndicator
        error={error ? true : false}
        size={size}
        disabled={disabled}
        readOnly={readOnly}
      />
      <div className="Checkbox-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
