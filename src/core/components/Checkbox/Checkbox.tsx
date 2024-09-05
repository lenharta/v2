import React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Icon } from '../Icon';
import { InlineInput } from '../InlineInput';
import { CheckboxGroup } from './CheckboxGroup';
import { useCheckboxContext } from './CheckboxContext';

export function getAriaChecked(isChecked?: boolean, isIndeterminate?: boolean): Core.AriaChecked {
  if (!!isChecked && !!isIndeterminate) {
    return 'mixed';
  }
  if (!!isChecked && !isIndeterminate) {
    return 'true';
  }
  return 'false';
}

const parseCheckboxIconState: Core.ParseCheckboxIconState = (props) => {
  let state: Core.CheckboxIconState = 'unchecked';
  let blocking: string[] = ['isLoading', 'isDisabled', 'isReadonly'];

  for (let key in props) {
    if (blocking.includes(key)) {
      state = 'unchecked';
    }
    if (key === 'isIndeterminate') {
      state = 'mixed';
    }
    if (key === 'isChecked') {
      state = 'checked';
    }
  }
  return state;
};

export type CheckboxFactory = Core.Factory<{
  ref: HTMLInputElement;
  props: Core.CheckboxProps;
  element: 'input';
  excluded: 'checked';
  elements: {
    Group: typeof CheckboxGroup;
  };
}>;

export const Checkbox = Component<CheckboxFactory>(
  (
    {
      icon,
      error,
      label,
      shape = 'square',
      status,
      message,
      isChecked,
      isLoading,
      isReadonly,
      isDisabled,
      isIndeterminate,
      ...props
    },
    ref
  ) => {
    const context = useCheckboxContext();

    const contextProps = !context
      ? {
          checked: isChecked,
          disabled: isDisabled,
          onChange: props.onChange,
          'aria-checked': getAriaChecked(isChecked, isIndeterminate),
        }
      : {
          disabled: context.isDisabled,
          checked: context.value.includes(props.value),
          'aria-checked': getAriaChecked(context.value.includes(props.value), isIndeterminate),
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            context.onValueChange?.(event.currentTarget.value);
            props.onChange?.(event);
          },
        };

    const state = parseCheckboxIconState({
      isChecked: contextProps.checked,
      isDisabled: contextProps.disabled,
      isReadonly: isReadonly || context.isReadonly,
      isIndeterminate,
    });

    return (
      <InlineInput
        error={error}
        label={label}
        status={status}
        message={message}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isReadonly={isReadonly}
      >
        <input
          {...props}
          {...contextProps}
          className="v2-checkbox-input"
          type="checkbox"
          ref={ref}
        />
        <Icon {...icon} name={`checkbox-${state}-${shape}`} />
      </InlineInput>
    );
  }
);

Checkbox.Group = CheckboxGroup;
Checkbox.displayName = '@v2/Checkbox';
