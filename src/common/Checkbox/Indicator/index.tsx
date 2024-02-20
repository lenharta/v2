import * as React from 'react';
import { Icon } from '@/common';
import type { Core } from '@/types/core';
import type { Size } from '@/types/common';

export type CheckboxIndicatorProps = { size?: Size; checked?: boolean; indeterminate?: boolean };

export type CheckboxIndicatorFactory = Core.RefFactory<{
  component: 'div';
  props: CheckboxIndicatorProps;
  ref: HTMLDivElement;
}>;

export const CheckboxIndicator: CheckboxIndicatorFactory = React.forwardRef((props, ref) => {
  const { checked, indeterminate, children, component: Component = 'div', ...otherProps } = props;

  const findStateIcon = () => {
    if (checked && !indeterminate) {
      return 'checkbox_checked';
    }
    if (!checked && !indeterminate) {
      return 'checkbox_unchecked';
    }
    return 'checkbox_indeterminate';
  };

  return (
    <Component {...otherProps} ref={ref} className="Checkbox-indicator">
      <Icon name={findStateIcon()} />
    </Component>
  );
});
