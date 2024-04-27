import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '../factory';

export interface LabelProps extends Core.BaseProps {}

export type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
  omits: 'className';
}>;

export const Label = factoryPolymorphic<LabelFactory>((props, ref) => {
  const { component: Component = 'label', children, ...forwardedProps } = props;
  return (
    <Component {...forwardedProps} ref={ref} className="label">
      {children}
    </Component>
  );
});

Label.displayName = '@v2/app/label';
