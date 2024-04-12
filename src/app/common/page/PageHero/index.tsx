import * as React from 'react';

export type PageHeroComponent = React.FC<{
  children?: React.ReactNode | undefined;
}>;

export const PageHero: PageHeroComponent = ({ children }) => {
  return (
    <section className="page-hero" role="presentation">
      <React.Fragment>{children}</React.Fragment>
    </section>
  );
};

PageHero.displayName = '@v2/app/Page.Hero';
