import clsx from 'clsx';
import { Factory } from '@/types';
import { LabelProps } from './types';
import { factoryPolymorphic } from '@/core';

type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

const Label = factoryPolymorphic<LabelFactory>((props, ref) => {
  const { className, component: Component = 'label', ...forwardedProps } = props;
  return <Component {...forwardedProps} ref={ref} className={clsx('v2-label', className)} />;
});

Label.displayName = '@v2/Label';
export { Label, type LabelProps };
