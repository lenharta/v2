import * as React from 'react';
import { Title } from '@/common';
import { PageContainer } from '../Container/Root';
import { PageHeroComponent } from '@/types';

export const PageHero: PageHeroComponent = React.forwardRef((props, ref) => {
  const { title, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="Page-hero">
      <PageContainer>{title && <Title as="h1">{title}</Title>}</PageContainer>
    </div>
  );
});

PageHero.displayName = 'v2/Page.PageHero';
