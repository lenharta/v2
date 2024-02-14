import * as React from 'react';
import { CheckboxInnerRootComponent } from '@/types';
import { Label } from '@/common';

export const CheckboxInner: CheckboxInnerRootComponent = React.forwardRef((props, ref) => {
  const { id, label, error, info, className, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      <Label htmlFor={id}>{label}</Label>
      <div>{error}</div>
      <div>{info}</div>
    </Component>
  );
});
