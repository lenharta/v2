import clsx from 'clsx';
import * as React from 'react';
import { CheckboxInner } from './Inner';
import { CheckboxIndicator } from './Indicator';
import { CheckboxRootComponent } from '@/types';

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

  const hasError = error !== undefined;

  const clxss = clsx(
    'Checkbox',
    { [`Checkbox--size-${size}`]: size },
    { [`Checkbox--align-${align}`]: align },
    { [`Checkbox--justify-${justify}`]: justify },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-error={hasError}
      data-disabled={disabled}
      data-readonly={readOnly}
      aria-disabled={disabled}
      aria-readonly={readOnly}
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
