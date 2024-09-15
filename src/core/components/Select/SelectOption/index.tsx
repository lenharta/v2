import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type SelectOptionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.SelectOptionProps;
  element: 'button';
}>;

export const SelectOption = Component<SelectOptionFactory>(
  (
    { size, label, value, variant, isReadonly, isDisabled, isSelected, className, ...props },
    ref
  ) => {
    const ariaProps = {
      'aria-disabled': isDisabled || undefined,
      'aria-selected': isSelected || undefined,
      'aria-readonly': isReadonly || undefined,
    };

    const dataProps = {
      'data-disabled': isDisabled || undefined,
      'data-selected': isSelected || undefined,
      'data-readonly': isSelected || undefined,
    };

    return (
      <button
        {...props}
        {...dataProps}
        {...ariaProps}
        ref={ref}
        value={value}
        className={clsx(
          'v2-select-option',
          { [`v2-select-option--${size}`]: size !== undefined },
          { [`v2-select-option--${variant}`]: variant !== undefined },
          className
        )}
      >
        {label}
      </button>
    );
  }
);

SelectOption.displayName = '@v2/Select.Option';
