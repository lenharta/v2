import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-headline',
};

export interface HeadlineProps {
  hash?: string;
  text?: string | React.ReactNode;
  title?: string | React.ReactNode;
}

export interface HeadlineComponents {}

export interface HeadlineComponent extends HeadlineComponents {
  (props: Core.BaseProps<'div', HeadlineProps>): React.ReactNode;
  displayName: string;
}

export const Headline: HeadlineComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={clsx(css.root, className)} {...otherProps}>
      {children}
    </div>
  );
};

Headline.displayName = '@v2/App.Headline';
