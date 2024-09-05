import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type StackFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.StackProps;
  element: 'div';
}>;

export const Stack = PolymorphicComponent<StackFactory>(
  ({ gap = 'unset', children, className, component: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx('v2-stack', `v2-stack--gap-${gap}`, className)}
        data-orientation="vertical"
        aria-orientation="vertical"
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = '@v2/Stack';
