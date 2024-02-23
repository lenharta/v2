import * as React from 'react';
import { Title } from '@/common';

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
      <div className="Page-container">
        {title && (
          <Title size="xxl" className="Page-hero-title">
            {title}
          </Title>
        )}
        {children}
      </div>
    </div>
  );
};

PageHero.displayName = '@v2/Page.Hero';
