import clsx from 'clsx';
import { Factory } from '@/types';
import { TitleProps } from './Title.types';
import { factoryPolymorphic } from '../../factory';

type TitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  comp: 'h3';
  props: TitleProps;
}>;

const Title = factoryPolymorphic<TitleFactory>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    children,
    className,
    component: Component = 'h3',
    ...forwardedProps
  } = props;
  return (
    <Component ref={ref} className={clsx('v2-title', className)} {...forwardedProps}>
      {children}
    </Component>
  );
});

Title.displayName = '@v2/Title';
export { Title };
