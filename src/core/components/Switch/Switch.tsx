import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { InlineInput } from '../InlineInput';
import { useSwitchContext } from './Switch.context';
import React from 'react';

export type SwitchFactory = Core.Factory<{
  ref: HTMLInputElement;
  props: Core.SwitchProps;
  element: 'input';
  excluded: 'onChange' | 'value';
}>;

export const Switch = Component<SwitchFactory>(
  (
    {
      size,
      label,
      value,
      radius,
      variant,
      checked,
      onChange,
      className,
      isLoading,
      isReadonly,
      isDisabled,
      component: Component = 'input',
      ...props
    },
    ref
  ) => {
    const context = useSwitchContext();

    const contextProps = context
      ? {
          checked: !!(value && context.value?.includes(value)) || undefined,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            event.stopPropagation();
            context.onChange?.(event);
            onChange?.(event);
          },
        }
      : {
          checked,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            event.stopPropagation();
            if (!isLoading || !isReadonly || !isDisabled) {
              onChange?.(event);
            }
          },
        };

    const inlineProps = {
      isLoading: isLoading || !!(context && context.isLoading) || undefined,
      isReadonly: isReadonly || !!(context && context.isReadonly) || undefined,
      isDisabled: isDisabled || !!(context && context.isDisabled) || undefined,
      'data-checked': checked || !!(value && context?.value?.includes(value)) || undefined,
      'aria-checked': checked || !!(value && context?.value?.includes(value)) || undefined,
    };

    return (
      <InlineInput
        {...props}
        {...inlineProps}
        ref={ref}
        label={label}
        className={clsx(
          'v2-switch',
          `v2-switch--${size || 'sm'}`,
          `v2-switch--${radius || 'round'}`,
          `v2-switch--${variant || 'default'}`,
          className
        )}
      >
        <Component {...props} {...contextProps} type="checkbox" className="v2-switch-input" />
        <div className="v2-switch-track">
          <div className="v2-switch-thumb" />
        </div>
      </InlineInput>
    );
  }
);
