import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import { RadioRootComponent } from '@/types';

export const Radio: RadioRootComponent = React.forwardRef((props, ref) => {
  const {
    id,
    size = 'sm',
    align = 'center',
    justify = 'start',
    info,
    error,
    label,
    disabled,
    readOnly,
    children,
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const clxss = clsx(
    'Radio',
    { [`Radio--size-${size}`]: size },
    { [`Radio--align-${align}`]: align },
    { [`Radio--justify-${justify}`]: justify },
    className
  );

  return (
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
      <div className="Radio-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
