import clsx from 'clsx';
import * as React from 'react';
import { Size } from '@/types/common';
import { mergeProps } from '@/utils';
import { useInputIds } from '@/hooks';
import { CheckboxIndicator } from './Indicator';
import { InputDescription, InputLabel } from '../Input';
import { CheckboxScheme, useCheckboxCTX } from './context';
import { CheckboxGroup } from './Group';

type CheckboxElementProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;
type CheckboxAttributeProps = React.RefAttributes<HTMLInputElement>;
type CheckboxBaseProps = CheckboxElementProps & CheckboxAttributeProps;

export interface CheckboxProps extends CheckboxBaseProps {
  /** Identifies the element */
  id?: string;

  /** Specifies a size for the element */
  size?: Size;

  /** Identifies an accessible label for the element */
  label?: string;

  /** Specifies a theme scheme for the element */
  scheme?: CheckboxScheme;

  /** Defines the elements `loading` state */
  loading?: boolean;

  /** Defines the elements `disabled` state */
  disabled?: boolean;

  /** Specifies a default HTML className appended to the elements classlist */
  className?: string;

  /** Specifies a description for the element */
  description?: string;

  /** Defines a ref object for the root element */
  rootRef?: React.RefObject<HTMLDivElement>;

  value?: string;

  checked?: boolean;

  indeterminate?: boolean;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  scheme: 'default',
};

function _Checkbox(props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const {
    id,
    size,
    value,
    label,
    scheme,
    checked,
    rootRef,
    loading,
    disabled,
    className,
    description,
    indeterminate,
    onChange,
    ...otherProps
  } = props;

  const _contextProps = useCheckboxCTX();

  const isLoading = loading !== undefined ? true : undefined;
  const isDisabled = (disabled || loading) !== undefined ? true : undefined;

  const uids = useInputIds(id, ['input', 'label', 'description']);
  const _props = mergeProps({ size, scheme }, defaultProps, _contextProps);

  const clxss = clsx(
    'Checkbox',
    `Checkbox--size-${_props.size}`,
    `Checkbox--scheme-${_props.scheme}`,
    className
  );

  const isChecked = (checked && !_contextProps.value) || _contextProps.value?.includes(value!);
  const isIndeterminate = !_contextProps.value && indeterminate !== undefined;

  return (
    <div ref={rootRef} className={clxss} data-loading={isLoading} data-disabled={isDisabled}>
      <Checkbox.Indicator checked={isChecked} value={value} />

      <input
        {...otherProps}
        id={uids.input}
        ref={ref}
        type="checkbox"
        {...(!value ? undefined : { value })}
        className="Checkbox-input"
        tabIndex={isDisabled ? undefined : 0}
        data-checked={isChecked}
        data-loading={isLoading}
        data-disabled={isDisabled}
        data-indeterminate={isIndeterminate}
        aria-labelledby={_contextProps.legend}
        aria-disabled={isDisabled}
        aria-checked={isIndeterminate ? 'mixed' : isChecked}
        aria-busy={isLoading}
        onChange={(event) => {
          _contextProps.onChange?.(event);
          onChange?.(event);
        }}
      />

      <div className="Checkbox-content">
        {loading ? (
          <Checkbox.Description
            id={uids.description}
            text="loading..."
            size={_props.size}
            data-loading={isLoading}
            data-disabled={isDisabled}
            className="Checkbox-description"
          />
        ) : (
          <Checkbox.Label
            id={uids.label}
            text={label}
            size={_props.size}
            htmlFor={uids.input}
            data-loading={isLoading}
            data-disabled={isDisabled}
            className="Checkbox-label"
          />
        )}

        {loading ? null : (
          <Checkbox.Description
            id={uids.description}
            text={description}
            size={_props.size}
            data-loading={isLoading}
            data-disabled={isDisabled}
            className="Checkbox-description"
          />
        )}
      </div>
    </div>
  );
}

export type CheckboxComponent = React.ForwardRefExoticComponent<CheckboxProps> & {
  Label: typeof InputLabel;
  Description: typeof InputDescription;
  Indicator: typeof CheckboxIndicator;
  Group: typeof CheckboxGroup;
};

export const Checkbox = React.forwardRef(_Checkbox) as CheckboxComponent;

Checkbox.Label = InputLabel;
Checkbox.Description = InputDescription;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.Group = CheckboxGroup;
