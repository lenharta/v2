import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '../factory';

export interface LabelProps extends Core.BaseProps {
  /** Indicates a disabled state for the element */
  disabled?: boolean | undefined;
}

export type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

export const Label = factoryPolymorphic<LabelFactory>((props, ref) => {
  const { component: Component = 'label', children, className, disabled, ...otherProps } = props;
  return (
    <Component
      {...otherProps}
      ref={ref}
      data-disabled={disabled}
      className={clsx('input-label', className)}
    >
      {children}
    </Component>
  );
});

Label.displayName = '@v2/app/label';
