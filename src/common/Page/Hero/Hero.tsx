import * as React from 'react';
import { Title } from '@/common';
import { Factory, createFactory } from '@/factory';

export type PageHeroProps = {
  title?: React.ReactNode;
};

export type PageHeroFactory = Factory.Config<{
  props: PageHeroProps;
  component: 'div';
}>;

export const PageHero = createFactory<PageHeroFactory>((props) => {
  const { title, children, component: Component = 'main', ...otherProps } = props;
  return (
    <Component {...otherProps} className="hero">
      {title && <Title as="h1">{title}</Title>}
      {children}
    </Component>
  );
});

PageHero.displayName = 'v2/Page.PageHero';
