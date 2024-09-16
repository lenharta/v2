import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Icon, UnstyledButton } from '@/core';

export type IconButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.IconButtonProps;
  element: 'button';
}>;

export const IconButton = Component<IconButtonFactory>(
  (
    {
      icon,
      radius,
      label,
      size,
      variant,
      className,
      isDisabled,
      isLoading,
      isReadonly,
      isSelected,
      component: Component = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <UnstyledButton
        {...props}
        ref={ref}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isReadonly={isReadonly}
        isSelected={isSelected}
        className={clsx(
          'v2-icon-button',
          `v2-icon-button--${size || 'sm'}`,
          `v2-icon-button--${radius || 'round'}`,
          `v2-icon-button--${variant || 'default'}`,
          className
        )}
      >
        <span className="v2-icon-button-layout">
          <Icon {...icon} />
        </span>
      </UnstyledButton>
    );
  }
);

IconButton.displayName = '@v2/IconButton';
