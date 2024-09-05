import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';
import { SideNav } from './SideNav/SideNav';
import { SideMenu } from './SideMenu/SideMenu';

export type SideProps = {};

export type SideComponent = Core.NamedComponent & {
  (props: Core.ComponentProps<'div', SideProps>): React.ReactNode;
  Menu: typeof SideMenu;
  Nav: typeof SideNav;
};

export const Side: SideComponent = ({ children, className, ...props }) => (
  <div {...props} className={clsx('v2-side', className)}>
    {children}
  </div>
);

Side.Nav = SideNav;
Side.Menu = SideMenu;
Side.displayName = '@v2/Side';
