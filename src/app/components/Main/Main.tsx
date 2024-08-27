import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-main',
};

export interface MainProps {}

export interface MainComponents {}

export interface MainComponent extends MainComponents {
  (props: Core.BaseProps<'main', MainProps>): React.ReactNode;
  displayName: string;
}

export const Main: MainComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <main className={clsx(css.root, className)} {...otherProps}>
      {children}
    </main>
  );
};

Main.displayName = '@v2/App.Main';
