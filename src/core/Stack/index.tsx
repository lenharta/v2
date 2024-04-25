import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

export interface StackProps extends Core.BaseProps {
  gap?: Core.Size5;
  align?: Core.Alignment | 'center';
  justify?: Core.Alignment | 'center';
}

export type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

export const Stack = factoryPolymorphic<StackFactory>((props, ref) => {
  const {
    gap = 'xs',
    align = 'start',
    justify = 'start',
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  return (
    <Component
      {...otherProps}
      ref={ref}
      aria-orientation="vertical"
      className={clsx(
        'stack',
        `stack--gap-${gap}`,
        `stack--align-${align}`,
        `stack--justify-${justify}`,
        className
      )}
    >
      {children}
    </Component>
  );
});

Stack.displayName = '@v2/core/Stack';
