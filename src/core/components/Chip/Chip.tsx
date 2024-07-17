import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { UnstyledButton } from '@core';
import { ChipGroup } from './ChipGroup';
import { ChipProps } from './types';

type ChipFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ChipProps;
  comps: {
    Group: typeof ChipGroup;
  };
}>;

const Chip = createFactory<ChipFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <UnstyledButton ref={ref} className={clsx('v2-chip', className)} {...forwardedProps}>
      {children}
    </UnstyledButton>
  );
});

Chip.Group = ChipGroup;
Chip.displayName = '@v2/Chip';
export { Chip };
