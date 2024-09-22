import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type MenuNavProps = {};

export type MenuNavFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: MenuNavProps;
  element: 'nav';
}>;

export const MenuNav = Component<MenuNavFactory>(({ className, children, ...props }, ref) => {
  return (
    <nav {...props} ref={ref} className={clsx('v2-menu-nav', className)}>
      {children}
    </nav>
  );
});
