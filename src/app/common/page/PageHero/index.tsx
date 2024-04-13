import * as React from 'react';

export type PageHeroComponent = React.FC<{
  children?: React.ReactNode | undefined;
  variant?: 'default' | 'home';
}>;

export const PageHero: PageHeroComponent = (props) => {
  const { children, variant = 'default' } = props;
  return (
    <section className={`page-hero--${variant}`} role="presentation">
      <div className={`page-hero-content--${variant}`}>{children}</div>
    </section>
  );
};

PageHero.displayName = '@v2/app/Page.Hero';
