import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-section',
};

export interface SectionProps {}

export interface SectionComponents {}

export interface SectionComponent extends SectionComponents {
  (props: Core.BaseProps<'section', SectionProps>): React.ReactNode;
  displayName: string;
}

export const Section: SectionComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <section className={clsx(css.root, className)} {...otherProps}>
      {children}
    </section>
  );
};

Section.displayName = '@v2/App.Section';
