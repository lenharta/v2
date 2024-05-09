import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core';
import { SidebarItem } from '../types';

export interface SidebarTargetProps extends SidebarItem {
  icon?: ICON | undefined;
  active?: boolean | undefined;
}

export type SidebarTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SidebarTargetProps;
}>;

export const SidebarTarget = factory<SidebarTargetFactory>((props, ref) => {
  const { icon, value, label, active, ...forwardedProps } = props;
  return (
    <button
      {...forwardedProps}
      ref={ref}
      title={label}
      value={value}
      children={<Icon name={icon} />}
      className={cx('sidebar-target')}
      aria-label={label.toLowerCase()}
      data-active={active || undefined}
    />
  );
});

SidebarTarget.displayName = '@v2/Sidebar.Target';
