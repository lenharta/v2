import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

interface StackProps {
  gap?: Core.Size | undefined;
  align?: 'start' | 'end' | 'center' | undefined;
  justify?: 'start' | 'end' | 'center' | undefined;
}

type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factoryPolymorphic<StackFactory>((props, ref) => {
  const {
    gap,
    align = 'start',
    justify = 'start',
    children,
    className,
    component: Component = 'div',
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
        gap && `v2-stack-gap--${gap}`,
        align && `v2-stack-align--${align}`,
        justify && `v2-stack-justify--${justify}`,
        className
      )}
    >
      {children}
    </Component>
  );
});

Stack.displayName = '@v2/Stack';
export { Stack, type StackProps };
