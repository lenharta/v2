import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-page',
};

export interface PageProps {}

export interface PageComponents {}

export interface PageComponent extends PageComponents {
  (props: Core.BaseProps<'div', PageProps>): React.ReactNode;
  displayName: string;
}

export const Page: PageComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={clsx(css.root, className)} {...otherProps}>
      {children}
    </div>
  );
};

Page.displayName = '@v2/App.Page';
