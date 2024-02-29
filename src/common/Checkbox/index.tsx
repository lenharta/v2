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

  rootRef?: React.RefObject<HTMLDivElement>;

  value?: string;
  checked?: boolean;
  onChange?: (value: React.ChangeEvent<HTMLInputElement> & { checked?: boolean }) => void;
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
    rootRef,
    loading,
    disabled,
    className,
    description,
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

  return (
    <div ref={rootRef} className={clxss} data-loading={isLoading} data-disabled={isDisabled}>
      <Checkbox.Indicator icon="checkbox_checked" />

      <input
        {...otherProps}
        ref={ref}
        id={uids.input}
        type="checkbox"
        className="Checkbox-input"
        tabIndex={isDisabled ? undefined : 0}
        data-loading={isLoading}
        data-disabled={isDisabled}
        aria-labelledby={_contextProps.legend}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
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

// import clsx from 'clsx';
// import * as React from 'react';
// import { Size } from '@/types/common';
// import { mergeProps } from '@/utils';
// import { useInputIds } from '@/hooks';
// import { CheckboxGroup } from './Group';
// import { UnstyledButton } from '../Button/Unstyled';
// import { CheckboxIndicator } from './Indicator';
// import { CheckboxScheme, useCheckboxCTX } from './context';

// type CheckboxElementProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;
// type CheckboxAttributeProps = React.RefAttributes<HTMLInputElement>;
// type CheckboxBaseProps = CheckboxElementProps & CheckboxAttributeProps;

// export interface CheckboxProps extends CheckboxBaseProps {
//   /** Identifies the element */
//   id?: string;

//   /** Specifies a size for the element */
//   size?: Size;

//   /** Identifies an accessible label for the element */
//   label?: string;

//   /** Specifies a theme scheme for the element */
//   scheme?: CheckboxScheme;

//   /** Defines the elements `loading` state */
//   loading?: boolean;

//   /** Defines the elements `disabled` state */
//   disabled?: boolean;

//   /** Specifies a default HTML className appended to the elements classlist */
//   className?: string;

//   /** Specifies a description for the element */
//   description?: string;

//   value?: string;
//   checked?: boolean;
//   onChange?: (value: React.ChangeEvent<HTMLInputElement> & { checked?: boolean }) => void;
// }

// const defaultProps: Partial<CheckboxProps> = {
//   scheme: 'default',
//   size: 'sm',
// };

// export const _Checkbox = (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
//   const {
//     id,
//     size,
//     label,
//     value,
//     scheme,
//     checked,
//     loading,
//     disabled,
//     className,
//     description,
//     onChange,
//     ...otherProps
//   } = props;

//   console.log(checked);

//   const ctx = useCheckboxCTX();

//   const _props = mergeProps({ id, size, scheme, disabled, loading }, defaultProps, ctx as any);

//   const ids = useInputIds(_props.id, ['input', 'description']);

//   const isEnabled = !_props.disabled || !_props.loading;

//   const clxss = clsx(
//     'Checkbox',
//     { [`Checkbox--size-${_props.size}`]: _props.size },
//     { [`Checkbox--scheme-${_props.scheme}`]: _props.scheme },
//     className
//   );

//   const isChecked = () => {
//     const _checkedSingle = isEnabled && checked === true;
//     const _checkedGroup = isEnabled && ctx.value?.includes(value as string);
//     return !_checkedSingle || !_checkedGroup ? undefined : true;
//   };

//   const findIndicatorIcon = () => {
//     const _checkedSingle = isEnabled && checked === true;
//     const _checkedGroup = isEnabled && ctx.value?.includes(value as string);
//     return !_checkedSingle || !_checkedGroup ? 'checkbox_checked' : 'checkbox_unchecked';
//   };

//   const ariaProps = {
//     'aria-checked': isChecked(),
//     'aria-disabled': isEnabled ? _props.disabled : undefined,
//     'aria-labelledby': ids.description,
//     'aria-describedby': description ? ids.description : undefined,
//   };

//   const dataProps = {
//     'data-checked': isChecked(),
//     'data-loading': !_props.disabled && _props.loading ? _props.loading : undefined,
//     'data-disabled': isEnabled ? _props.disabled : undefined,
//   };

//   return (
//     <label className="Checkbox-label" htmlFor={ids.input}>
//       <input
//         {...otherProps}
//         {...ariaProps}
//         {...dataProps}
//         ref={ref}
//         // role="checkbox"
//         // type="button"
//         value={value}
//         tabIndex={_props.disabled ? undefined : 0}
//         className={clxss}
//         onChange={onChange}
//       />
//       <Checkbox.Indicator icon={findIndicatorIcon()} />

//       <div className="Checkbox-inner">
//         {label}

//         {description && (
//           <p className="Checkbox-description" id={ids.description}>
//             {description}
//           </p>
//         )}
//       </div>
//     </label>
//   );
// };

// export const Checkbox = React.forwardRef(
//   _Checkbox
// ) as React.ForwardRefExoticComponent<CheckboxProps> & {
//   Group: typeof CheckboxGroup;
//   Indicator: typeof CheckboxIndicator;
// };

// Checkbox.displayName = '@v2/Checkbox';
// Checkbox.Group = CheckboxGroup;
// Checkbox.Indicator = CheckboxIndicator;
