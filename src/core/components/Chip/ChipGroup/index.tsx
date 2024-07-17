import clsx from 'clsx';
import { Group } from '@core';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { ChipProvider } from '../context';
import { ChipGroupProps } from '../types';

type ChipGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ChipGroupProps;
}>;

const ChipGroup = createFactory<ChipGroupFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Group ref={ref} className={clsx('v2-chip-group', className)} {...forwardedProps}>
      <ChipProvider value={{}}>{children}</ChipProvider>
    </Group>
  );
});

ChipGroup.displayName = '@v2/Chip.Group';
export { ChipGroup };
