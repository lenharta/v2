import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { LabelProps } from './Label.types';

type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

const Label = factory<LabelFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <label ref={ref} className={clsx('v2-label', className)} {...forwardedProps}>
      {children}
    </label>
  );
});

Label.displayName = '@v2/Label';
export { Label };
