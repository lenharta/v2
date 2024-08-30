import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

const css = {
  root: 'v2-app-hero',
};

export interface HeroProps {}

export interface HeroComponents {}

export interface HeroComponent extends HeroComponents {
  (props: Core.ComponentProps<'section', HeroProps>): React.ReactNode;
  displayName: string;
}

export const Hero: HeroComponent = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <section className={clsx(css.root, className)} {...otherProps}>
      {children}
    </section>
  );
};

Hero.displayName = '@v2/App.Hero';
