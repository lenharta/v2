import clsx from 'clsx';
import * as React from 'react';
import { useSurface } from '@/hooks';
import { CheckboxRootComponent } from '@/types';

import { createEventCallback } from '../utils';
import { CheckboxIndicator } from './Indicator';
import { CheckboxInner } from './Inner';

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
    checked,
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

  const hasHover = hover === true;
  const hasError = error !== undefined;

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
      data-error={hasError}
      data-hovered={hasHover}
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
        size={size}
        error={hasError}
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
      />
      <CheckboxInner
        id={id}
        info={info}
        label={label}
        error={error}
        checked={checked}
        className="Checkbox-inner"
      />
    </Component>
  );
});

Checkbox.displayName = '@v2/Checkbox';
