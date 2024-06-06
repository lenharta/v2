import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { ToggleGroupProps } from '../types';
import { ToggleProvider } from '../context';

const css = {
  group: 'v2-radio-group',
};

type ToggleGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ToggleGroupProps;
}>;

const ToggleGroup = factory<ToggleGroupFactory>((props, ref) => {
  const { className, children, orientation = 'vertical', ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} className={clsx(css.group, className)} ref={ref}>
      <ToggleProvider value={{ orientation }}>{children}</ToggleProvider>
    </Box>
  );
});

ToggleGroup.displayName = '@v2/Toggle.Group';
export { ToggleGroup };
