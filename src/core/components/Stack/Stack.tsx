import clsx from 'clsx';
import { Factory } from '@/types';
import { StackProps } from './Stack.types';
import { factoryPolymorphic } from '../../factory';

type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factoryPolymorphic<StackFactory>((props, ref) => {
  const { children, className, component: Component = 'div', ...forwardedProps } = props;

  return (
    <Component
      ref={ref}
      className={clsx('v2-stack', className)}
      data-orientation="vertical"
      aria-orientation="vertical"
      {...forwardedProps}
    >
      {children}
    </Component>
  );
});

Stack.displayName = '@v2/Stack';
export { Stack };
