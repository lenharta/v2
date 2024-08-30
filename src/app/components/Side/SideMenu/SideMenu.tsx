import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-side-menu',
};

export interface SideMenuProps {}

export interface SideMenuComponents {}

export interface SideMenuComponent extends SideMenuComponents {
  (props: Core.ComponentProps<'div', SideMenuProps>): React.ReactNode;
  displayName: string;
}

export const SideMenu: SideMenuComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={clsx(css.root, className)} {...otherProps}>
      {children}
    </div>
  );
};

SideMenu.displayName = '@v2/App.Side.Menu';
