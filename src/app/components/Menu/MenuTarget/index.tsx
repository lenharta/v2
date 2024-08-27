import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-menu-target',
};

export interface MenuTargetProps {}

export interface MenuTargetComponents {}

export interface MenuTargetComponent extends MenuTargetComponents {
  (props: Core.BaseProps<'button', MenuTargetProps>): React.ReactNode;
  displayName: string;
}

export const MenuTarget: MenuTargetComponent = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <button className={clsx(css.root, className)} {...otherProps}>
      {children}
    </button>
  );
};

MenuTarget.displayName = '@v2/Menu.Target';
