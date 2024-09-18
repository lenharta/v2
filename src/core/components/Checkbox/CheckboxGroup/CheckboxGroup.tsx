import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createKeyDownRefScope, mergeRefs } from '@/utils';
import { CheckboxProvider } from '../Checkbox.context';

export type CheckboxGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.CheckoboxGroupProps;
  excluded: 'onChange';
  element: 'div';
}>;

export const CheckboxGroup = Component<CheckboxGroupFactory>(
  (
    {
      gap = 'xxs',
      size,
      value,
      shape,
      variant,
      onChange,
      children,
      isLoading,
      isReadonly,
      isDisabled,
      component = 'div',
      orientation = 'horizontal',
      ...props
    },
    ref
  ) => {
    const elementRef = React.useRef<HTMLDivElement>(null);

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: itemValue } = event.currentTarget || {};
      return onChange?.(
        value.includes(itemValue)
          ? value.filter((stateItem) => stateItem !== itemValue)
          : [...value, itemValue]
      );
    };

    return (
      <div
        {...props}
        ref={mergeRefs(ref, elementRef)}
        className={clsx('v2-checkbox-group', `v2-checkbox-group--gap-${gap}`)}
        onKeyDownCapture={createKeyDownRefScope(elementRef, { orientation })}
        data-orientation={orientation}
        aria-orientation={orientation}
        data-checkbox-group
      >
        <CheckboxProvider
          value={{
            size,
            shape,
            value,
            variant,
            isLoading,
            isDisabled,
            isReadonly,
            orientation,
            onChange: onValueChange,
          }}
        >
          {children}
        </CheckboxProvider>
      </div>
    );
  }
);

CheckboxGroup.displayName = '@v2/Checkbox.Group';
