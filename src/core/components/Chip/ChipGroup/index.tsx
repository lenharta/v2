import clsx from 'clsx';
import { Core } from '@/types';
import { Group } from '@/core';
import { PolymorphicComponent } from '@/factory';

export type ChipGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ChipGroupProps;
  element: 'div';
}>;

export const ChipGroup = PolymorphicComponent<ChipGroupFactory>(
  ({ gap, children, className, orientation, component = 'div', onChange, ...props }, ref) => {
    return (
      <Group
        {...props}
        className={clsx('v2-chip-group', className)}
        orientation={orientation}
        component={component}
        gap={gap}
        ref={ref}
      >
        {children}
      </Group>
    );
  }
);

ChipGroup.displayName = '@v2/Chip.Group';
