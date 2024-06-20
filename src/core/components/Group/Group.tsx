import clsx from 'clsx';
import { Factory } from '@/types';
import { GroupProps } from './Group.types';
import { factoryPolymorphic } from '../../factory';

type GroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: GroupProps;
}>;

const Group = factoryPolymorphic<GroupFactory>((props, ref) => {
  const {
    children,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx('v2-group', className)}
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
