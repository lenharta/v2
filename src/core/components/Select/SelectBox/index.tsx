import clsx from 'clsx';
import { Core } from '@/types';
import { Floating } from '@/core';
import { Component } from '@/factory';

export type SelectBoxFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.SelectBoxProps;
  element: 'div';
}>;

export const SelectBox = Component<SelectBoxFactory>(
  ({ variant, children, className, ...props }, ref) => {
    const classNames = clsx('v2-select-box', { [`v2-select-box--${variant}`]: variant }, className);
    return (
      <Floating.Box>
        <div {...props} className={classNames} ref={ref}>
          {children}
        </div>
      </Floating.Box>
    );
  }
);

SelectBox.displayName = '@v2/Select.Box';
