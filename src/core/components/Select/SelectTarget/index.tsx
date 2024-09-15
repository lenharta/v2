import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Floating, useFloatingContext, Icon, UnstyledButton } from '@/core';

export type SelectTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.SelectTargetProps;
  element: 'button';
}>;

export const SelectTarget = Component<SelectTargetFactory>(
  (
    {
      size,
      value,
      variant,
      className,
      placeholder,
      isSelected,
      isDisabled,
      isReadonly,
      isLoading,
      ...props
    },
    ref
  ) => {
    const context = useFloatingContext();

    return (
      <Floating.Target>
        <UnstyledButton
          {...props}
          ref={ref}
          isLoading={isLoading}
          isDisabled={isDisabled}
          isReadonly={isReadonly}
          isSelected={isSelected || context.isOpen || undefined}
          className={clsx(
            'v2-select-target',
            `v2-select-target--${size || 'sm'}`,
            `v2-select-target--${variant || 'default'}`,
            className
          )}
        >
          <span className="v2-select-target-layout">
            {value || placeholder}
            <Icon name={context.isOpen ? 'chevron-contract' : 'chevron-south'} />
          </span>
        </UnstyledButton>
      </Floating.Target>
    );
  }
);

SelectTarget.displayName = '@v2/Select.Target';
