import * as React from 'react';
import { Icon, IconName } from '@/common';

type CheckboxIndicatorElementProps = React.ComponentPropsWithoutRef<'div'>;
type CheckboxIndicatorAttributeProps = React.RefAttributes<HTMLDivElement>;
type CheckboxIndicatorBaseProps = CheckboxIndicatorElementProps & CheckboxIndicatorAttributeProps;

export interface CheckboxIndicatorProps extends CheckboxIndicatorBaseProps {
  value?: string;
  checked?: boolean;
}

export const _CheckboxIndicator = (
  props: CheckboxIndicatorProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { checked, value, ...otherProps } = props;

  const icon = (): IconName => {
    if (checked) {
      return 'checkbox_checked';
    }
    return 'checkbox_unchecked';
  };

  return (
    <div {...otherProps} ref={ref} className="Checkbox-indicator">
      <Icon name={icon()} />
    </div>
  );
};

export const CheckboxIndicator = React.forwardRef(
  _CheckboxIndicator
) as React.ForwardRefExoticComponent<CheckboxIndicatorProps>;

CheckboxIndicator.displayName = '@v2/Checkbox.Indicator';
