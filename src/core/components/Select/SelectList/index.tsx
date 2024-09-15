import clsx from 'clsx';
import { Core } from '@/types';
import { Floating } from '@/core';
import { Component } from '@/factory';

export type SelectListFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.SelectBoxProps;
  element: 'div';
}>;

export const SelectList = Component<SelectListFactory>(
  ({ size, variant, children, className, ...props }, ref) => {
    const classNames = clsx(
      'v2-select-box',
      { [`v2-select-box--${size}`]: size },
      { [`v2-select-box--${variant}`]: variant },
      className
    );

    return (
      <Floating.Box>
        <div {...props} ref={ref} className={classNames}>
          {children}
        </div>
      </Floating.Box>
    );
  }
);

SelectList.displayName = '@v2/Select.Listbox';
