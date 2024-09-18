import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { UnstyledButton } from '../../UnstyledButton';

export type SelectOptionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.SelectOptionProps;
  element: 'button';
}>;

export const SelectOption = Component<SelectOptionFactory>(
  (
    {
      size,
      label,
      value,
      variant,
      isReadonly,
      isDisabled,
      isSelected,
      isLoading,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <UnstyledButton
        {...props}
        ref={ref}
        role="listitem"
        value={value}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isReadonly={isReadonly}
        isSelected={isSelected}
        className={clsx(
          'v2-select-option',
          `v2-select-option--${size || 'sm'}`,
          `v2-select-option--${variant || 'default'}`,
          className
        )}
      >
        <span className="v2-select-option-layout">{label}</span>
      </UnstyledButton>
    );
  }
);

SelectOption.displayName = '@v2/Select.Option';
