import clsx from 'clsx';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Component } from '@/factory';
import { Core } from '@/types';

export type MenuLinkProps = Router.LinkProps & {
  rootProps: React.ComponentPropsWithoutRef<'li'>;
  label: string;
};

export type MenuLinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  props: MenuLinkProps;
  element: typeof Router;
}>;

export const MenuLink = Component<MenuLinkFactory>(
  ({ label, className, rootProps, ...props }, ref) => {
    return (
      <li {...rootProps} className={clsx('v2-menu-item', rootProps.className)}>
        <Router.Link {...props} ref={ref} className={clsx('v2-menu-link', className)}>
          {label}
        </Router.Link>
      </li>
    );
  }
);
