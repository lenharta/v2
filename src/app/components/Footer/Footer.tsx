import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-page',
};

export interface FooterProps {}

export interface FooterComponents {}

export interface FooterComponent extends FooterComponents {
  (props: Core.BaseProps<'footer', FooterProps>): React.ReactNode;
  displayName: string;
}

export const Footer: FooterComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <footer className={clsx(css.root, className)} {...otherProps}>
      {children}
    </footer>
  );
};

Footer.displayName = '@v2/App.Footer';
