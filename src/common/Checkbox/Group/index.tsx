import * as React from 'react';
import { CheckboxProvider } from '../context';
import type { Core } from '@/types/core';
import type { Orientation } from '@/types/common';

export type CheckboxGroupProps = {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?(event: React.FormEvent<HTMLButtonElement>): void;
  orientation?: Orientation;
};

export type CheckboxGroupFactory = Core.RefFactory<{
  component: 'div';
  props: CheckboxGroupProps;
  ref: HTMLDivElement;
}>;

export const CheckboxGroup: CheckboxGroupFactory = React.forwardRef((props, ref) => {
  const {
    checked,
    onChange,
    orientation = 'vertical',
    children,
    component: Component = 'div',
    ...otherProps
  } = props;
  return (
    <Component {...otherProps} ref={ref} className="CheckboxGroup" data-orientation={orientation}>
      <CheckboxProvider value={{ checked, onChange, orientation }}>{children}</CheckboxProvider>
    </Component>
  );
});
