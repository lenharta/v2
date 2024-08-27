import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ChipGroupProps } from '../types';
import { ChipGroupProvider } from '../context';

type ChipGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'size' | 'variant' | 'onChange';
  props: ChipGroupProps;
}>;

const ChipGroup = createFactory<ChipGroupFactory>((props, ref) => {
  const {
    gap,
    size,
    value,
    variant,
    loading,
    readOnly,
    disabled,
    orientation,
    className,
    onChange,
    children,
    ...forwardedProps
  } = props;

  return (
    <Group
      ref={ref}
      gap={gap}
      orientation={orientation}
      className={clsx('v2-chip-group', className)}
      {...forwardedProps}
    >
      <ChipGroupProvider value={{ size, variant, value, loading, readOnly, disabled, onChange }}>
        {children}
      </ChipGroupProvider>
    </Group>
  );
});

ChipGroup.displayName = '@v2/Chip.Group';
export { ChipGroup };
