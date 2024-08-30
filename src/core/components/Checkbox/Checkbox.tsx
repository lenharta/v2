import clsx from 'clsx';
import React from 'react';
import { InlineInput } from '@/core';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';
import { CheckboxIcon } from './CheckboxIcon';
import { CheckboxGroup } from './CheckboxGroup';
import { useCheckboxContext } from './CheckboxContext';

export function getAriaChecked(checked?: boolean, mixed?: boolean): Core.AriaChecked {
  return !!checked && !!mixed ? 'mixed' : !!checked && !mixed ? 'true' : 'false';
}

export interface CheckboxComponents {
  Icon: typeof CheckboxIcon;
  Group: typeof CheckboxGroup;
}

export type CheckboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: Core.CheckboxProps;
  comps: CheckboxComponents;
}>;

const css: Core.CheckboxCssObject = {
  root: 'v2-checkbox',
  input: 'v2-checkbox-input',
};

export const Checkbox = createFactory<CheckboxFactory>((props, ref) => {
  const {
    icon,
    label,
    mixed,
    checked,
    loading,
    readOnly,
    disabled,
    className,
    // wrapperProps,
    ...forwardedProps
  } = props;

  const context = useCheckboxContext();

  const contextProps = context
    ? {
        checked: context.value.includes(forwardedProps.value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          context.onChange?.(event.currentTarget.value);
          forwardedProps.onChange?.(event);
        },
      }
    : {};

  return (
    <InlineInput
      className={clsx(css.root, className)}
      loading={loading}
      disabled={disabled}
      readOnly={readOnly}
      selected={contextProps.checked || checked || undefined}
      label={label}
      role="checkbox"
      // {...wrapperProps}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={contextProps.checked || checked || undefined}
        onChange={forwardedProps.onChange}
        className={css.input}
        aria-checked={getAriaChecked(contextProps.checked || checked || undefined, mixed)}
        {...forwardedProps}
        {...contextProps}
      />

      <Checkbox.Icon
        checked={contextProps.checked || checked || undefined}
        mixed={mixed}
        icon={icon}
      />
    </InlineInput>
  );
});

Checkbox.Icon = CheckboxIcon;
Checkbox.Group = CheckboxGroup;
Checkbox.displayName = '@v2/Checkbox';
