import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { InlineInput } from '../InlineInput';
import { useSwitchContext } from './Switch.context';

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

    const loading = isLoading || context?.isLoading || undefined;
    const readonly = isReadonly || context?.isReadonly || undefined;
    const disabled = isDisabled || context?.isDisabled || undefined;
    const isChecked = checked || (value && context?.value?.includes(value)) || undefined;

    const contextProps = context
      ? {
          checked: (value && context.value?.includes(value)) || undefined,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!loading && !readonly && !disabled) {
              event.stopPropagation();
              context.onChange?.(event);
              onChange?.(event);
              return true;
            }
            return false;
          },
        }
      : {
          checked: !!checked,
          'data-checked': !!checked,
          'aria-checked': !!checked,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!loading && !readonly && !disabled) {
              event.stopPropagation();
              onChange?.(event);
              return true;
            }
            return false;
          },
        };

    return (
      <InlineInput
        {...props}
        ref={ref}
        label={label}
        isLoading={loading}
        isReadonly={readonly}
        isDisabled={disabled}
        aria-checked={isChecked}
        data-checked={isChecked}
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
