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
    surface = 'base',
    emphasis = 'med',
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
        `v2-title--${surface}`,
        `v2-title--size-${size}`,
        `v2-title--lead-${lead}`,
        `v2-title--weight-${weight}`,
        `v2-title--emphasis-${emphasis}`,
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
