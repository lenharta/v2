import * as React from 'react';
import { Title } from '@/common';
import { PageContainer } from '../Container';

export type PageHeroBaseProps = React.JSX.IntrinsicElements['div'];

export interface PageHeroProps extends PageHeroBaseProps {
  title?: string;
}

export interface PageHeroComponent {
  (props: PageHeroProps): JSX.Element | null;
  displayName: string;
}

export const PageHero: PageHeroComponent = (props) => {
  const { title, children, ...otherProps } = props;
  return (
    <div {...otherProps} className="Page-hero">
      <PageContainer>
        {title && (
          <Title size="xxl" className="Page-hero-title" h1>
            {title}
          </Title>
        )}
        {children}
      </PageContainer>
    </div>
  );
};

PageHero.displayName = '@v2/Page.Hero';
