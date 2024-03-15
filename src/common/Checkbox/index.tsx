import clsx from 'clsx';
import * as React from 'react';
import { Size } from '@/types/common';
import { mergeProps } from '@/utils';
import { useInputIds } from '@/hooks';
import { CheckboxIndicator } from './Indicator';
import { InputDescription, InputLabel } from '../Input';
import { CheckboxScheme, useCheckboxCTX } from './context';
import { CheckboxGroup } from './Group';

type CheckboxBaseProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

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
  } = mergeProps(defaultProps, props);

  const ctx = useCheckboxCTX();

  const isLoading = loading !== undefined ? true : undefined;
  const isChecked = (checked && !ctx.value) || ctx.value?.includes(value!);
  const isDisabled = (disabled || loading) !== undefined ? true : undefined;
  const isIndeterminate = !ctx.value && indeterminate !== undefined;

  const uids = useInputIds(id, ['input', 'label', 'description']);
  const clxss = clsx('checkbox', `checkbox--size-${size}`, `checkbox--scheme-${scheme}`, className);

  return (
    <div ref={rootRef} className={clxss} data-loading={isLoading} data-disabled={isDisabled}>
      <Checkbox.Indicator checked={isChecked} value={value} />

      <input
        {...otherProps}
        id={uids.input}
        ref={ref}
        type="checkbox"
        className="checkbox-input"
        {...(!value ? undefined : { value })}
        tabIndex={isDisabled ? undefined : 0}
        data-checked={isChecked}
        data-loading={isLoading}
        data-disabled={isDisabled}
        data-indeterminate={isIndeterminate}
        aria-labelledby={ctx.legend}
        aria-disabled={isDisabled}
        aria-checked={isIndeterminate ? 'mixed' : isChecked}
        aria-busy={isLoading}
        onChange={(event) => {
          ctx.onChange?.(event);
          onChange?.(event);
        }}
      />

      <div className="checkbox-content">
        {loading ? (
          <Checkbox.Description
            id={uids.description}
            size={size}
            text="loading..."
            data-loading={isLoading}
            data-disabled={isDisabled}
            className="checkbox-description"
          />
        ) : (
          <Checkbox.Label
            id={uids.label}
            size={size}
            text={label}
            htmlFor={uids.input}
            data-loading={isLoading}
            data-disabled={isDisabled}
            className="checkbox-label"
          />
        )}

        {loading ? null : (
          <Checkbox.Description
            id={uids.description}
            size={size}
            text={description}
            data-loading={isLoading}
            data-disabled={isDisabled}
            className="checkbox-description"
          />
        )}
      </div>
    </div>
  );
}

export type CheckboxComponents = {
  Label: typeof InputLabel;
  Description: typeof InputDescription;
  Indicator: typeof CheckboxIndicator;
  Group: typeof CheckboxGroup;
};

export const Checkbox = React.forwardRef(_Checkbox) as CheckboxComponents &
  React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

Checkbox.displayName = '@v2/Checkbox';
Checkbox.Label = InputLabel;
Checkbox.Description = InputDescription;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.Group = CheckboxGroup;
