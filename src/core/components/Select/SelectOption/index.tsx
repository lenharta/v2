import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { UnstyledButton } from '@/core';

export type SelectOptionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.SelectOptionProps;
  element: 'button';
}>;

export const SelectOption = Component<SelectOptionFactory>(
  ({ label, value, variant, isReadonly, isDisabled, isSelected, className, ...props }, ref) => {
    const classNames = clsx(
      'v2-select-option',
      { [`v2-select-option--${variant}`]: variant },
      className
    );
    return (
      <UnstyledButton
        {...props}
        aria-selected={!!isSelected}
        data-selected={!!isSelected}
        isDisabled={!!isDisabled}
        isReadonly={!!isReadonly}
        className={classNames}
        value={value}
        ref={ref}
      >
        {label}
      </UnstyledButton>
    );
  }
);

SelectOption.displayName = '@v2/Select.Option';
