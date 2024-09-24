import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { MenuLink } from '../MenuLink';
import { Divider } from '@/core';

export type MenuNavProps = {};

export type MenuNavFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: MenuNavProps;
  element: 'nav';
}>;

export const MENU_NAV_LINKS = [
  {
    value: '/',
    label: 'Home',
  },
  {
    value: '/about',
    label: 'About',
  },
  {
    value: '/stack',
    label: 'Stack',
  },
  {
    value: '/sandbox',
    label: 'Sandbox',
  },
];

export const MenuNav = Component<MenuNavFactory>(({ className, children, ...props }, ref) => {
  return (
    <nav {...props} ref={ref} className={clsx('v2-menu-nav', className)}>
      <Divider label="Navigate" />
      <ul className="v2-menu-list">
        {MENU_NAV_LINKS.map(({ value, label }) => (
          <MenuLink key={value} to={value} label={label} />
        ))}
      </ul>
    </nav>
  );
});
