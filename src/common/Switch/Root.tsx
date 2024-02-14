import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import { SwitchRootComponent } from '@/types';

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

  const clxss = clsx(
    'Switch',
    { [`Switch--size-${size}`]: size },
    { [`Switch--align-${align}`]: align },
    { [`Switch--justify-${justify}`]: justify },
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
      <div className="Switch-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
