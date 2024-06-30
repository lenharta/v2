import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { LabelProps } from './types';

type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

const Label = createPolymorphicFactory<LabelFactory>((props, ref) => {
  const { className, children, component: Component = 'label', ...forwardedProps } = props;

  return (
    <Component ref={ref} className={clsx('v2-label', className)} {...forwardedProps}>
      {children}
    </Component>
  );
});

Label.displayName = '@v2/Label';
export { Label };
