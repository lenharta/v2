import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-header',
};

export interface HeaderProps {}

export interface HeaderComponents {}

export interface HeaderComponent extends HeaderComponents {
  (props: Core.ComponentProps<'header', HeaderProps>): React.ReactNode;
  displayName: string;
}

export const Header: HeaderComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <header className={clsx(css.root, className)} {...otherProps}>
      {children}
    </header>
  );
};

Header.displayName = '@v2/App.Header';
