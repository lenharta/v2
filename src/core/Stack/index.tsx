import clsx from 'clsx';
import { factory, factoryPolymorphic } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface StackProps extends Core.BaseProps {}

export type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factoryPolymorphic<StackFactory>((props, ref) => {
  const { component: Component = 'div', children, className, ...otherProps } = props;
  return (
    <Component
      {...otherProps}
      aria-orientation="vertical"
      className={clsx('stack', className)}
      ref={ref}
    >
      {children}
    </Component>
  );
});

Stack.displayName = '@v2/core/Stack';
