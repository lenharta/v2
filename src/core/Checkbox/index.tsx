import React from 'react';
import { Input } from '@/core/Input';
import { factory } from '../factory';
import { ICON, Icon } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { CheckboxGroup } from './Group';
import { useFocusIndex } from '../hooks';
import { useCheckboxContext } from './context';
import clsx from 'clsx';

export type CheckboxState = 'true' | 'false' | 'mixed';
export type CheckboxStateLookup = Record<CheckboxState, ICON>;

export interface CheckboxProps extends Core.BaseProps, Core.FocusProps {
  /** Defines a unique global identifier for the element. */
  id?: string | undefined;
  /** A string representing the `Checkbox` value. */
  value?: string | undefined;
  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;
  /** Specifies text the gives additional context to the `Checkbox.label` */
  message?: string | undefined;
  /** Indicates the current "checked" state of the `Checkbox`. If `true` the element is currently checked. If `false` the element supports being checked but is not currently checked. */
  checked?: boolean | undefined;
  /** Indicates a mixed mode value of neither checked nor unchecked. */
  indeterminate?: boolean | undefined;
  /** Defines a `ref` object given to the `Input` wrapper. */
  wrapperRef?: React.RefObject<HTMLDivElement> | null | undefined;
  /** Defines a change event handler for the element. */
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export type CheckboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: CheckboxProps;
  omits: 'children' | 'onChange';
  comps: {
    Group: typeof CheckboxGroup;
  };
}>;

export const checkboxIconLookup: CheckboxStateLookup = {
  true: 'checkbox_checked',
  false: 'checkbox_unchecked',
  mixed: 'checkbox_indeterminate',
};

export const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const {
    id,
    value,
    label,
    message,
    checked,
    disabled,
    tabIndex,
    className,
    wrapperRef,
    indeterminate,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const uid = React.useId();
  const ctx = useCheckboxContext();

  const getRenderId = (element: string) => {
    const base = [id ?? value, uid, element].join('');
    return ctx.groupId ? [ctx.groupId, base].join(':') : base;
  };

  const ids = {
    input: getRenderId('input'),
    label: getRenderId('label'),
    message: getRenderId('message'),
  };

  const isChecked = (checked && !ctx.value) ?? ctx.value?.includes(value!);
  const isDisabled = (disabled || ctx.disabled) ?? undefined;
  const isIndeterminate = (!ctx.value && indeterminate) ?? undefined;

  const focusProps = useFocusIndex({
    disabled: isDisabled,
    allowDisabledFocus,
    excludeTabOrder,
    tabIndex,
  });

  let ariaChecked: CheckboxState | undefined;

  if (isChecked && !isIndeterminate) {
    ariaChecked = 'true';
  }
  if (!isChecked && !isIndeterminate) {
    ariaChecked = 'false';
  }
  if (isIndeterminate) {
    ariaChecked = 'mixed';
  }

  const indicatorKey = checkboxIconLookup[ariaChecked ?? 'false'];
  const indicatorLabel = indicatorKey?.split('_').toString().toLowerCase();

  let accessibleProps = {
    ...(label ? { 'aria-labelledby': ids.label } : {}),
    ...(message ? { 'aria-describedby': ids.message } : {}),
    ...(isDisabled ? { 'aria-disabled': true } : {}),
    ...(ariaChecked ? { 'aria-checked': ariaChecked } : {}),
    ...focusProps,
  };

  return (
    <Input
      ref={wrapperRef}
      input={{ id: ids.input }}
      label={{ id: ids.label, text: label ?? value }}
      message={{ id: ids.message, text: message }}
      className="checkbox-layout"
    >
      {ariaChecked && (
        <div className="indicator">
          <Icon name={indicatorKey} aria-label={indicatorLabel} />
        </div>
      )}

      <input
        {...otherProps}
        {...accessibleProps}
        id={ids.input}
        ref={ref}
        type="checkbox"
        value={value}
        className={clsx('checkbox-input', className)}
        onChange={(event) => {
          if (!disabled) {
            event.stopPropagation();
            otherProps.onChange?.(event);
            ctx.onChange?.(event);
          }
        }}
      />
    </Input>
  );
});

Checkbox.displayName = '@v2/core/Checkbox';
Checkbox.Group = CheckboxGroup;
