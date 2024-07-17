import clsx from 'clsx';
import { Factory } from '@types';
import { StackProps } from '@core';
import { createPolymorphicFactory } from '@factory';

type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = createPolymorphicFactory<StackFactory>((props, ref) => {
  const {
    gap = 'unset',
    children,
    className,
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx('v2-stack', `v2-stack--gap-${gap}`, className)}
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
