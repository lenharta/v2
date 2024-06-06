import { Factory } from '@/types';
import { Box, Icon, factory } from '@/core';
import { RadioIndicatorProps } from '../types';

const css = {
  indicator: 'v2-radio-indicator',
};

export type RadioIndicatorFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: RadioIndicatorProps;
}>;

const RadioIndicator = factory((props, ref) => {
  const { ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={css.indicator}>
      <Icon name="radioChecked" />
    </Box>
  );
});

RadioIndicator.displayName = '@v2/Radio.Indicator';
export { RadioIndicator };
