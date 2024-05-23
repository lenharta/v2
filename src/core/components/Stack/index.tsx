import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

interface StackProps {
  gap?: Core.Size;
  align?: Core.Align | 'center';
  justify?: Core.Align | 'center';
}

type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factoryPolymorphic<StackFactory>((props, ref) => {
  const {
    gap = 'xs',
    align = 'start',
    justify = 'start',
    component: Component = 'div',
    className,
    ...forwardedProps
  } = props;

  return (
    <Component
      {...forwardedProps}
      ref={ref}
      data-orientation="vertical"
      aria-orientation="vertical"
      className={clsx(
        'v2-stack',
        `v2-stack--gap-${gap}`,
        `v2-stack--align-${align}`,
        `v2-stack--justify-${justify}`,
        className
      )}
    />
  );
});

Stack.displayName = '@v2/Stack';
export { Stack, type StackProps };
