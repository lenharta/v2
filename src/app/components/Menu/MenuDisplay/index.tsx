import clsx from 'clsx';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Floating, Icon } from '@/core';
import { Component } from '@/factory';
import { Core, ICON } from '@/types';

export type MenuDisplayProps = {};

export type MenuFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: MenuDisplayProps;
  element: 'aside';
}>;

export const MenuLink: MenuLinkComponent = ({ to = '/', label, icon, ...props }) => {
  return (
    <li className="v2-menu-link">
      <Router.Link className="v2-menu-link-layout" to={to} {...props}>
        <span>{label}</span>
        <Icon {...icon} />
      </Router.Link>
    </li>
  );
};

type MenuLinkProps = Router.LinkProps & { icon: Partial<ICON.Props>; label: string };

type MenuLinkComponent = React.FC<MenuLinkProps>;

type MenuNavProps = React.ComponentPropsWithoutRef<'nav'> & {};

type MenuNavComponent = React.FC<MenuNavProps>;

export const MenuNav: MenuNavComponent = ({ className, ...props }) => {
  return <nav className={clsx('v2-menu-nav', className)} {...props} />;
};

export const MenuDisplay = Component<MenuFactory>(({ className, children, ...props }, ref) => (
  <Floating.Box>
    <aside {...props} ref={ref} className={clsx('v2-menu-display', className)}>
      {children}
    </aside>
  </Floating.Box>
));

MenuDisplay.displayName = '@v2/Menu.Display';
