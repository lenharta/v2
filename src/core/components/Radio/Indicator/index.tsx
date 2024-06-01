import { Icon } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { RadioIndicatorProps } from '../Radio.types';

export type RadioIndicatorFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: RadioIndicatorProps;
}>;

const RadioIndicator = factory((props, ref) => {
  const { ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className="v2-radio-indicator">
      <Icon name="radioChecked" />
    </div>
  );
});

RadioIndicator.displayName = '@v2/Radio.Indicator';
export { RadioIndicator };
