import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

interface BoxProps {}

type BoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: BoxProps;
}>;

const Box = factoryPolymorphic<BoxFactory>((props, ref) => {
  const { className, children, component: Component = 'div', ...forwardedProps } = props;
  return (
    <Component {...forwardedProps} ref={ref} className={clsx('v2-box', className)}>
      {children}
    </Component>
  );
});

Box.displayName = '@v2/Box';
export { Box, type BoxProps };
