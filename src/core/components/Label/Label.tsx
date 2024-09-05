import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type LabelFactory = Core.Factory<{
  ref: HTMLLabelElement;
  props: Core.LabelProps;
  element: 'label';
}>;

export const Label = PolymorphicComponent<LabelFactory>(
  ({ children, className, component: Component = 'label', ...props }, ref) => {
    return (
      <Component {...props} ref={ref} className={clsx('v2-label', className)}>
        {children}
      </Component>
    );
  }
);

Label.displayName = '@v2/Label';
