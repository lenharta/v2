import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type GroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.GroupProps;
  element: 'div';
}>;

export const Group = PolymorphicComponent<GroupFactory>((props, ref) => {
  const {
    gap,
    children,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    ...otherProps
  } = props;

  const accessibleProps = {
    'aria-orientation': orientation,
  };

  return (
    <Component
      {...otherProps}
      {...accessibleProps}
      className={clsx('v2-group', `v2-group--gap-${gap}`, className)}
      ref={ref}
    >
      {children}
    </Component>
  );
});

Group.displayName = '@v2/Group';
