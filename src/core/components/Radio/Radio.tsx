import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { RadioProps } from './Radio.types';
import { RadioIndicator } from './Indicator';
import { RadioGroup } from './Group';

type RadioFactory = Factory.Config<{
  comp: 'input';
  ref: HTMLInputElement;
  props: RadioProps;
  comps: {
    Group: typeof RadioGroup;
    Indicator: typeof RadioIndicator;
  };
}>;

const Radio = factory<RadioFactory>((props, ref) => {
  const { className, label, description, error, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className={clsx('v2-radio', className)}>
      <div className="v2-radio-inner">
        <input className="v2-radio-input" />

        <Radio.Indicator />

        <div className="v2-radio-copy">
          {label && <div className="v2-radio-label">{label}</div>}
          {description && <div className="v2-radio-desc">{description}</div>}
          {error && <div className="v2-radio-error">{error}</div>}
        </div>
      </div>
    </div>
  );
});

Radio.Group = RadioGroup;
Radio.Indicator = RadioIndicator;
Radio.displayName = '@v2/Radio';
export { Radio };
