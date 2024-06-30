import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { GroupProps } from './types';

type GroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: GroupProps;
}>;

const Group = createPolymorphicFactory<GroupFactory>((props, ref) => {
  const {
    gap = 'default',
    children,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx('v2-group', `v2-group--gap-${gap}`, className)}
      data-orientation={orientation}
      aria-orientation={orientation}
      {...forwardedProps}
    >
      {children}
    </Component>
  );
});

Group.displayName = '@v2/Group';
export { Group };
