import { cx } from '@/app/utils';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface SidebarGroupProps {
  orientation?: Core.Orientation | undefined;
}

export type SidebarGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarGroupProps;
}>;

export const SidebarGroup = factory<SidebarGroupFactory>((props, ref) => {
  const { children, orientation = 'vertical', ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      ref={ref}
      className={cx('sidebar-group')}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      {children}
    </div>
  );
});

SidebarGroup.displayName = '@v2/Sidebar.Group';
