import clsx from 'clsx';
import * as React from 'react';
import { Icon } from '../Icon';
import { CheckboxIndicatorRootComponent } from '@/types';

export const CheckboxIndicator: CheckboxIndicatorRootComponent = React.forwardRef((props, ref) => {
  const {
    size = 'sm',
    error,
    checked,
    readOnly,
    disabled,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxss = clsx('CheckboxIndicator', { [`CheckboxIndicator--size-${size}`]: size }, className);
  const icon = checked ? 'checkbox_checked' : 'checkbox_unchecked';
  const iconLabel = checked ? 'input checked icon' : 'input unchecked icon';

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-error={error}
      data-checked={checked}
      data-readonly={readOnly}
      data-disabled={disabled}
    >
      <Icon name={icon} aria-label={iconLabel} />
    </Component>
  );
});
