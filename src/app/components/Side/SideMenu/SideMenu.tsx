import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type SideMenuProps = {};

export type SideMenuFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: SideMenuProps;
  element: 'div';
}>;

export const SideMenu = Component<SideMenuFactory>(({ children, className, ...props }, ref) => (
  <div {...props} ref={ref} className={clsx('v2-side-menu', className)}>
    {children}
  </div>
));

SideMenu.displayName = '@v2/Side.Menu';
