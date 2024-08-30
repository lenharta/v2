import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';

export type GroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: Core.GroupComponentProps;
  comp: 'div';
}>;

const css: Record<'root', string> = {
  root: 'v2-group',
};

export const Group = createPolymorphicFactory<GroupFactory>((props, ref) => {
  const {
    gap,
    children,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <Component
      {...forwardedProps}
      ref={ref}
      className={clsx(css.root, `${css.root}--gap-${gap}`, className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      {children}
    </Component>
  );
});

Group.displayName = '@v2/Group';
