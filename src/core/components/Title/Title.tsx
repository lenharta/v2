import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { TitleProps } from './types';

type TitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  comp: 'h3';
  props: TitleProps;
  omits: 'color';
}>;

const Title = createPolymorphicFactory<TitleFactory>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    lead = 'xs',
    size = 'sm',
    weight = 'lgt',
    variant,
    children,
    className,
    component: Component = 'h3',
    ...forwardedProps
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx(
        'v2-title',
        { [`v2-title--${variant}`]: variant },
        { [`v2-title--size-${size}`]: size },
        { [`v2-title--lead-${lead}`]: lead },
        { [`v2-title--weight-${weight}`]: weight },
        className
      )}
      {...forwardedProps}
    >
      {children}
    </Component>
  );
});

Title.displayName = '@v2/Title';
export { Title };
