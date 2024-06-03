import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';
import { BoxRootProps } from './types';

type BoxRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: BoxRootProps;
}>;

const Box = factoryPolymorphic<BoxRootFactory>((props, ref) => {
  const { className, children, component: Component = 'div', ...forwardedProps } = props;
  return (
    <Component {...forwardedProps} ref={ref} className={className}>
      {children}
    </Component>
  );
});

Box.displayName = '@v2/Box.Root';
export { Box };
