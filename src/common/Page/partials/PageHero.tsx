import clsx from 'clsx';
import * as React from 'react';
import { Title } from '@/common';
import { PageContainer } from './PageContainer';
import { type ExoticComponent } from '@/types';

export type PageHeroProps = { title?: React.ReactNode };

export type PageHeroComponent = ExoticComponent<'div', PageHeroProps>;

export const PageHero: PageHeroComponent = React.forwardRef((props, ref) => {
  const { children, component: Component = 'div', title, className, ...otherProps } = props;
  const clxss = clsx('page-hero', className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      <PageContainer>
        {title && (
          <Title as="h1" className="page-title">
            {title}
          </Title>
        )}
        {children}
      </PageContainer>
    </Component>
  );
});

PageHero.displayName = 'v2/Page.Hero';
