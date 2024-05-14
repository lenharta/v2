import { cx } from '@/app/utils';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface SidebarGroupProps {
  children: React.ReactNode | undefined;
  orientation?: Core.Orientation | undefined;
}

export type SidebarGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarGroupProps;
}>;

export const SidebarGroup = factory<SidebarGroupFactory>((props, ref) => {
  const { orientation = 'vertical', ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      ref={ref}
      className={cx('sidebar-group')}
      data-orientation={orientation}
      aria-orientation={orientation}
    />
  );
});

SidebarGroup.displayName = '@v2/Sidebar.Group';
