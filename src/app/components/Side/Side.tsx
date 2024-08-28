import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';
import { SideMenu } from './SideMenu/SideMenu';
import { SideNav } from './SideNav/SideNav';

const css = {
  root: 'v2-app-side',
};

export interface SideProps {}

export interface SideComponents {
  Nav: typeof SideNav;
  Menu: typeof SideMenu;
}

export interface SideComponent extends SideComponents {
  (props: Core.BaseProps<'div', SideProps>): React.ReactNode;
  displayName: string;
}

export const Side: SideComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={clsx(css.root, className)} {...otherProps}>
      {children}
    </div>
  );
};

Side.Nav = SideNav;
Side.Menu = SideMenu;
Side.displayName = '@v2/App.Side';
