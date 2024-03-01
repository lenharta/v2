import * as React from 'react';
import { mergeProps } from '@/utils';
import { CheckboxProvider, CheckboxScheme } from '../context';
import { Orientation, Size } from '@/types/common';
import { useInputIds } from '@/hooks';

type CheckboxGroupElementProps = Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'onChange'>;
type CheckboxGroupAttributeProps = React.RefAttributes<HTMLFieldSetElement>;
type CheckboxGroupBaseProps = CheckboxGroupElementProps & CheckboxGroupAttributeProps;

export interface CheckboxGroupProps extends CheckboxGroupBaseProps {
  size?: Size;
  scheme?: CheckboxScheme;
  orientation?: Orientation;
  onChange: (value: string[]) => void;
  legend?: string;
  value: string[];
}

const defaultProps: Partial<CheckboxGroupProps> = {
  orientation: 'vertical',
  scheme: 'accent-elevated',
  size: 'sm',
};

const _CheckboxGroup = (
  props: CheckboxGroupProps,
  ref: React.ForwardedRef<HTMLFieldSetElement>
) => {
  const { legend, value, onChange, orientation, scheme, size, children, ...otherProps } = props;

  const uids = useInputIds(legend, ['legend']);
  const _props = mergeProps({ size, scheme, orientation }, defaultProps);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const itemValue = event.currentTarget.value!;
    const clone = [...value];
    onChange(
      clone.includes(itemValue) ? clone.filter((item) => item !== itemValue) : [...clone, itemValue]
    );
  };

  return (
    <fieldset
      {...otherProps}
      ref={ref}
      className="Checkbox-group"
      data-orientation={_props.orientation}
      aria-orientation={_props.orientation}
    >
      {legend && <legend>{legend}</legend>}
      <CheckboxProvider value={{ ..._props, value, onChange: handleChange, legend: uids.legend }}>
        {children}
      </CheckboxProvider>
    </fieldset>
  );
};

export type CheckboxGroupComponent = React.ForwardRefExoticComponent<CheckboxGroupProps>;
export const CheckboxGroup = React.forwardRef(_CheckboxGroup) as CheckboxGroupComponent;
CheckboxGroup.displayName = '@v2/Checkbox.Group';
