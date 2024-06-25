import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { factory } from '../../../factory';
import { ChipGroupProps } from '../Chip.types';

type ChipGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ChipGroupProps;
}>;

const ChipGroup = factory<ChipGroupFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Group ref={ref} className={clsx('v2-chip-group', className)} {...forwardedProps}>
      {children}
    </Group>
  );
});

ChipGroup.displayName = '@v2/Chip.Group';
export { ChipGroup };
