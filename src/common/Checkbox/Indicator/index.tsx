import clsx from 'clsx';
import * as React from 'react';
import { Icon } from '@/common';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';

export interface CheckboxIndicatorProps extends ElementProps<'div'> {
  checked?: boolean;
  value?: string;
}

const defaultProps: Partial<CheckboxIndicatorProps> = {};

export const CheckboxIndicator = React.forwardRef<HTMLDivElement, CheckboxIndicatorProps>(
  (props, ref) => {
    const { checked, value, className, ...otherProps } = mergeProps(defaultProps, props);
    const clxss = clsx('checkbox-indicator', className);
    const label = !checked ? 'checkbox unchecked' : 'checkbox checked';
    const icon = !checked ? 'checkbox_unchecked' : 'checkbox_checked';

    return (
      <div
        {...otherProps}
        ref={ref}
        className={clxss}
        children={<Icon name={icon} aria-label={[label, 'icon'].join(' ')} />}
      />
    );
  }
);

CheckboxIndicator.displayName = '@v2/Checkbox.Indicator';
