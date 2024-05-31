import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box, Icon, Icons } from '@/core/components';
import { CheckboxIndicatorProps, CheckboxStatus } from '../Checkbox.types';

type CheckboxIndicatorFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: CheckboxIndicatorProps;
}>;

const CHECKBOX_ICON_LOOKUP: Record<CheckboxStatus, keyof typeof Icons> = {
  ['true']: 'checkboxChecked',
  ['false']: 'checkboxUnchecked',
  ['mixed']: 'checkboxIndeterminate',
};

const CheckboxIndicator = factory<CheckboxIndicatorFactory>((props, ref) => {
  const { status, ...forwardedProps } = props;

  return (
    <Box {...forwardedProps} ref={ref} className="v2-checkbox-indicator">
      <Icon name={CHECKBOX_ICON_LOOKUP[status]} />
    </Box>
  );
});

CheckboxIndicator.displayName = '@v2/Checkbox.Indicator';
export { CheckboxIndicator };
