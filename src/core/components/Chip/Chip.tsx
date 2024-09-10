import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Icon, UnstyledButton } from '@/core';
import { useChipContext } from './ChipContext';
import { ChipGroup } from './ChipGroup';

export type ChipFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ChipProps;
  element: 'div';
  elements: {
    Group: typeof ChipGroup;
  };
}>;

const Chip = Component<ChipFactory>(
  (
    { size, value, variant, children, className, isLoading, isReadonly, isDisabled, ...props },
    ref
  ) => {
    const context = useChipContext();

    const classNames = clsx(
      'v2-chip',
      `v2-chip--${size || context.size || 'sm'}`,
      `v2-chip--${variant || context.variant || 'default'}`,
      className
    );

    return (
      <div {...props} ref={ref} className={classNames}>
        <div className="v2-chip-label">{children}</div>
        <UnstyledButton className="v2-chip-close" children={<Icon name="close-x-circle" />} />
      </div>
    );
  }
);

Chip.Group = ChipGroup;
Chip.displayName = '@v2/Chip';
export { Chip };
