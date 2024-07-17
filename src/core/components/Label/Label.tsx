import clsx from 'clsx';
import { Factory } from '@types';
import { createPolymorphicFactory } from '@factory';
import { LabelProps } from './types';

type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

const Label = createPolymorphicFactory<LabelFactory>((props, ref) => {
  const {
    size,
    lead,
    weight,
    variant,
    children,
    className,
    component: Component = 'label',
    ...forwardedProps
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx(
        'v2-label',
        { [`v2-label--${variant}`]: variant },
        { [`v2-label--size-${size}`]: size },
        { [`v2-label--lead-${lead}`]: lead },
        { [`v2-label--weight-${weight}`]: weight },
        className
      )}
      {...forwardedProps}
    >
      {children}
    </Component>
  );
});

Label.displayName = '@v2/Label';
export { Label };
