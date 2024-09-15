import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Floating, useFloatingContext, Icon } from '@/core';

export type SelectTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.SelectTargetProps;
  element: 'button';
}>;

export const SelectTarget = Component<SelectTargetFactory>(
  ({ size, value, variant, placeholder, className, ...props }, ref) => {
    const context = useFloatingContext();

    const dataProps = {
      'data-selected': context.isOpen || undefined,
    };

    return (
      <Floating.Target>
        <button
          {...props}
          {...dataProps}
          ref={ref}
          className={clsx(
            'v2-select-target',
            { [`v2-select-target--${size}`]: size },
            { [`v2-select-target--${variant}`]: variant },
            className
          )}
        >
          <span className="v2-select-target-layout">
            {value || placeholder}
            <Icon name={context.isOpen ? 'chevron-contract' : 'chevron-south'} />
          </span>
        </button>
      </Floating.Target>
    );
  }
);

SelectTarget.displayName = '@v2/Select.Target';
