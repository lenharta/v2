import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-menu-display',
};

export interface MenuDisplayProps {}

export interface MenuDisplayComponents {}

export interface MenuDisplayComponent extends MenuDisplayComponents {
  (props: Core.ComponentProps<'aside', MenuDisplayProps>): React.ReactNode;
  displayName: string;
}

export const MenuDisplay: MenuDisplayComponent = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <aside className={clsx(css.root, className)} {...otherProps}>
      {children}
    </aside>
  );
};

MenuDisplay.displayName = '@v2/Menu.Display';
