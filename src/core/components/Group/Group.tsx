import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type GroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.GroupProps;
  element: 'div';
}>;

export const Group = PolymorphicComponent<GroupFactory>(
  (
    {
      gap,
      children,
      className,
      orientation = 'horizontal',
      component: Component = 'div',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        data-core-group
        aria-orientation={orientation}
        className={clsx('v2-group', { [`v2-group--gap-${gap}`]: gap !== undefined }, className)}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);

Group.displayName = '@v2/Group';
