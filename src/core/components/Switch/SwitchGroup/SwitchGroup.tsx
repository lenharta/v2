import clsx from 'clsx';
import { Core } from '@/types';
import { Group } from '@/core';
import { Component } from '@/factory';
import { SwitchProvider } from '../Switch.context';
import React from 'react';

export type SwitchGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.SwitchGroupProps;
  element: 'div';
  excluded: 'onChange';
}>;

export const SwitchGroup = Component<SwitchGroupFactory>(
  (
    {
      size,
      value,
      variant,
      onChange,
      children,
      className,
      isLoading,
      isDisabled,
      isReadonly,
      component: Component = 'div',
      ...props
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: itemValue } = event.currentTarget || {};
      event.stopPropagation();

      return onChange?.(
        value.includes(itemValue)
          ? value.filter((stateItem) => stateItem !== itemValue)
          : [...value, itemValue]
      );
    };
    return (
      <Group {...props} ref={ref} className={clsx('v2-SwitchGroup', className)}>
        <SwitchProvider
          value={{
            size,
            value,
            variant,
            isLoading,
            isReadonly,
            isDisabled,
            onChange: handleChange,
          }}
        >
          {children}
        </SwitchProvider>
      </Group>
    );
  }
);

SwitchGroup.displayName = '@v2/Switch.Group';
