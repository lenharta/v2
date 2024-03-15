import * as React from 'react';
import { mergeProps } from '@/utils';
import { CheckboxProvider, CheckboxScheme } from '../context';
import { Orientation, Size } from '@/types/common';
import { useInputIds } from '@/hooks';

type CheckboxGroupBaseProps = Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'onChange'>;

export interface CheckboxGroupProps extends CheckboxGroupBaseProps {
  size?: Size;
  scheme?: CheckboxScheme;
  orientation?: Orientation;
  onChange: (value: string[]) => void;
  disabled?: boolean;
  readonly?: boolean;
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
  const {
    size,
    value,
    scheme,
    legend,
    disabled,
    readonly,
    children,
    orientation,
    onChange,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const uids = useInputIds(legend, ['legend']);

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
      aria-orientation={orientation}
      data-orientation={orientation}
      data-diabled={disabled}
    >
      {legend && <legend>{legend}</legend>}
      <CheckboxProvider
        value={{ value, size, scheme, orientation, legend: uids.legend, onChange: handleChange }}
      >
        {children}
      </CheckboxProvider>
    </fieldset>
  );
};

export const CheckboxGroup = React.forwardRef(_CheckboxGroup) as React.ForwardRefExoticComponent<
  CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>
>;

CheckboxGroup.displayName = '@v2/Checkbox.Group';
