import clsx from 'clsx';
import * as React from 'react';

export type PageHeroComponent = React.FC<{
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}>;

export const PageHero: PageHeroComponent = (props) => {
  const { children, className } = props;
  return (
    <section className={clsx('page-hero', className)} role="presentation">
      {children}
    </section>
  );
};

PageHero.displayName = '@v2/app/Page.Hero';
