import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-side-nav',
};

export interface SideNavProps {}

export interface SideNavComponents {}

export interface SideNavComponent extends SideNavComponents {
  (props: Core.BaseProps<'nav', SideNavProps>): React.ReactNode;
  displayName: string;
}

export const SideNav: SideNavComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <nav className={clsx(css.root, className)} {...otherProps}>
      {children}
    </nav>
  );
};

SideNav.displayName = '@v2/App.Side.Nav';
