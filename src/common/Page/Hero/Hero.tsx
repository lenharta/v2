import * as React from 'react';
import { Title } from '@/common';
import { Factory, createFactory } from '@/factory';
import { PageContainer } from '../Container';

export type PageHeroProps = {
  title?: React.ReactNode;
};

export type PageHeroFactory = Factory.Config<{
  props: PageHeroProps;
  component: 'div';
}>;

export const PageHero = createFactory<PageHeroFactory>((props) => {
  const { title, children, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} className="hero">
      <PageContainer>
        {title && <Title as="h1">{title}</Title>}
        {children}
      </PageContainer>
    </Component>
  );
});

PageHero.displayName = 'v2/Page.PageHero';
