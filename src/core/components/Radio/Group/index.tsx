import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { RadioGroupProps } from '../types';
import { RadioGroupProvider } from '../context';

const css = {
  group: 'v2-radio-group',
};

type RadioGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: RadioGroupProps;
}>;

const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const { className, children, orientation = 'vertical', ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} className={clsx(css.group, className)} ref={ref}>
      <RadioGroupProvider value={{ orientation }}>{children}</RadioGroupProvider>
    </Box>
  );
});

RadioGroup.displayName = '@v2/Radio.Group';
export { RadioGroup };
