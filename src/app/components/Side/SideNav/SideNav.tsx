import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type SideNavProps = {};

export type SideNavFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: SideNavProps;
  element: 'nav';
}>;

export const SideNav = Component<SideNavFactory>(({ children, className, ...props }) => (
  <nav className={clsx('v2-side-nav', className)} {...props}>
    {children}
  </nav>
));

SideNav.displayName = '@v2/Side.Nav';
