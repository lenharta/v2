import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Floating, UnstyledButton, useFloatingContext, Icon } from '@/core';

export type SelectTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.SelectTargetProps;
  element: 'button';
}>;

export const SelectTarget = Component<SelectTargetFactory>(
  ({ value, variant, placeholder, className, ...props }, ref) => {
    const context = useFloatingContext();

    const classNames = clsx(
      'v2-select-target',
      { [`v2-select-target--${variant}`]: variant },
      className
    );

    return (
      <Floating.Target>
        <UnstyledButton
          {...props}
          data-selected={!!context.isOpen}
          className={classNames}
          ref={ref}
        >
          <div className="v2-select-target-layout">
            {value || placeholder}
            <Icon name={context.isOpen ? 'chevron-contract' : 'chevron-south'} />
          </div>
        </UnstyledButton>
      </Floating.Target>
    );
  }
);

SelectTarget.displayName = '@v2/Select.Target';
