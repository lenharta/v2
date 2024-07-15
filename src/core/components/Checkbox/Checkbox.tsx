import clsx from 'clsx';
import { Factory } from '@/types';
import { InlineInput } from '@/core';
import { createFactory } from '@/factory';
import { CheckboxProps } from './types';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxIndicator } from './CheckboxIndicator';
import { useCheckboxContext } from './context';
import React from 'react';

type CheckboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: CheckboxProps;
  comps: {
    Group: typeof CheckboxGroup;
    Indicator: typeof CheckboxIndicator;
  };
}>;

type AriaChecked = React.JSX.IntrinsicElements['input']['aria-checked'];

function findAriaChecked(checked: boolean | undefined, mixed?: boolean | undefined): AriaChecked {
  return !!checked && !!mixed ? 'mixed' : !!checked && !mixed ? 'true' : 'false';
}

const Checkbox = createFactory<CheckboxFactory>((props, ref) => {
  const {
    icon,
    label,
    mixed,
    checked,
    loading,
    readOnly,
    disabled,
    className,
    wrapperProps,
    ...forwardedProps
  } = props;

  const ctx = useCheckboxContext();

  const contextProps = ctx
    ? {
        checked: ctx.value.includes(forwardedProps.value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          ctx.onChange?.(event.currentTarget.value);
          forwardedProps.onChange?.(event);
        },
      }
    : {};

  return (
    <InlineInput
      role="checkbox"
      label={label}
      loading={loading}
      selected={contextProps.checked || checked || undefined}
      readOnly={readOnly}
      disabled={disabled}
      className={clsx('v2-checkbox', className)}
      {...wrapperProps}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={contextProps.checked || checked || undefined}
        onChange={forwardedProps.onChange}
        className="v2-checkbox-input"
        aria-checked={findAriaChecked(contextProps.checked || checked || undefined, mixed)}
        {...forwardedProps}
        {...contextProps}
      />

      <Checkbox.Indicator
        className="v2-checkbox-indicator"
        checked={contextProps.checked || checked || undefined}
        mixed={mixed}
        icon={icon}
      />
    </InlineInput>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.displayName = '@v2/Checkbox';
export { Checkbox };
