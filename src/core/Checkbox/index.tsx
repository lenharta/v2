import clsx from 'clsx';
import * as React from 'react';
import { CheckboxGroup } from './Group';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';
import { Text, Label, Icon } from '@/core';
import { useCheckboxContext } from './context';
import { createEventCallback } from '@/utils';

export interface CheckboxProps {
  /**
   * Defines a unique global identifier for the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   * @default undefined
   */
  id?: string | undefined;
  /**
   * A string representing the `Checkbox` value.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
   * @default undefined
   */
  value?: string | undefined;
  /**
   * Defines a shorthand property `aria-label` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default undefined
   */
  label?: string | undefined;
  /**
   * Specifies text the gives additional context to the `Checkbox.label`
   * @see {CheckboxProps.label}
   * @default undefined
   */
  description?: string | undefined;
  /**
   * - Indicates the current "checked" state of the `Checkbox`.
   * - `true` - The element is currently checked.
   * - `false` - The element supports being checked but is not currently checked.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role
   * @default undefined
   */
  checked?: boolean | undefined;
  /**
   * Indicates a mixed mode value of neither checked nor unchecked.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role
   * @default undefined
   */
  indeterminate?: boolean | undefined;
  /**
   * Specifies a index for the `Checkbox` tab order, if provided any other focusable props are ignored.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  tabIndex?: number | undefined;
  /**
   * Indicates a `disabled` state for the `Checkbox`.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
  /**
   * Specifies if the element should be ignored in the current tab order.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  excludeTabOrder?: boolean | undefined;
  /**
   * Defines if the element should be focused when `disabled` state is provided.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  allowDisabledFocus?: boolean | undefined;
  /**
   * Defines a default html `class` appended to the `Checkbox` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
  /**
   * Defines a `ref` object given to the `Input` wrapper.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default undefined
   */
  wrapperRef?: React.RefObject<HTMLDivElement> | null | undefined;
  /**
   * Defines a change event handler for the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   * @default undefined
   */
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | (() => void);
}

export const checkboxIconLookup = {
  true: 'checkbox_checked',
  false: 'checkbox_unchecked',
  mixed: 'checkbox_indeterminate',
} as const;

export type CheckboxState = 'true' | 'false' | 'mixed';

export type CheckboxFactory = Core.Factory<{
  ref: HTMLInputElement;
  comp: 'input';
  props: CheckboxProps;
  omits: 'children';
  comps: {
    Group: typeof CheckboxGroup;
  };
}>;

function getCheckedState(props: CheckboxProps): CheckboxState | undefined {
  if (!props.disabled) {
    if (props.checked && !props.indeterminate) {
      return 'true';
    }
    if (!props.checked && !props.indeterminate) {
      return 'false';
    }
    if (props.indeterminate) {
      return 'mixed';
    }
  }
  return undefined;
}

export const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const {
    id,
    label,
    value,
    checked,
    disabled,
    tabIndex,
    className,
    wrapperRef,
    description,
    indeterminate,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const uid = React.useId();
  const ctx = useCheckboxContext();
  const getRenderId = (eid: string) => `${id}${uid}${eid}`;

  let isChecked = (checked && !ctx.value) || ctx.value?.includes(value!);
  let isDisabled = (disabled || ctx.disabled) !== undefined;
  let isIndeterminate = !ctx.value && indeterminate !== undefined;

  let focusProps = useFocusIndex({
    excludeTabOrder,
    allowDisabledFocus,
    disabled: isDisabled,
    tabIndex,
  });

  let isState = React.useMemo(
    () =>
      getCheckedState({
        checked: isChecked,
        disabled: isDisabled,
        indeterminate: isIndeterminate,
      }),
    [ctx.disabled, ctx.value, disabled, value, indeterminate]
  );

  let accessibleProps = {
    id: getRenderId('input'),
    role: otherProps['role'] || 'checkbox',
    'aria-labelledby': otherProps['aria-labelledby'] || getRenderId('input'),
    'aria-describedby': otherProps['aria-describedby'] || getRenderId('description'),
    ...(isDisabled ? { 'aria-disabled': true } : {}),
    ...(isState ? { 'aria-checked': isState } : {}),
    ...focusProps,
  };

  const handleChange = createEventCallback(otherProps.onChange, (event) => {
    event.stopPropagation();
    ctx.onChange(event);
  });

  return (
    <div className="inline-input" ref={wrapperRef}>
      <span className="inner">
        {isState && (
          <div className="indicator">
            <Icon name={checkboxIconLookup[isState]} />
          </div>
        )}

        <input
          {...otherProps}
          {...accessibleProps}
          ref={ref}
          type="checkbox"
          className={clsx('checkbox', className)}
          onChange={handleChange}
          value={value}
        />

        <div>
          {description && (
            <Text id={getRenderId('description')} className="description">
              {description}
            </Text>
          )}

          {label && (
            <Label id={getRenderId('label')} htmlFor={getRenderId('input')}>
              {label}
            </Label>
          )}
        </div>
      </span>
    </div>
  );
});

Checkbox.displayName = '@v2/core/Checkbox';
Checkbox.Group = CheckboxGroup;
