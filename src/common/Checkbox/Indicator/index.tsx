import * as React from 'react';
import { Icon } from '@/common';
import { mergeProps } from '@/utils';

type CheckboxIndicatorBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface CheckboxIndicatorProps extends CheckboxIndicatorBaseProps {
  value?: string;
  checked?: boolean;
}

const defaultProps: Partial<CheckboxIndicatorProps> = {};

export const _Indicator = (
  props: CheckboxIndicatorProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { checked, value, ...otherProps } = mergeProps(defaultProps, props);
  const icon = !checked ? 'checkbox_unchecked' : 'checkbox_checked';
  const label = !checked ? 'checkbox unchecked' : 'checkbox checked';

  return (
    <div
      {...otherProps}
      ref={ref}
      aria-labe={label}
      className="Checkbox-indicator"
      children={<Icon name={icon} />}
    />
  );
};

export const CheckboxIndicator = React.forwardRef(_Indicator) as React.ForwardRefExoticComponent<
  CheckboxIndicatorProps & React.RefAttributes<HTMLDivElement>
>;

CheckboxIndicator.displayName = '@v2/Checkbox.Indicator';
