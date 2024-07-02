import clsx from 'clsx';
import * as React from 'react';

interface PageHeroProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

type PageHeroFactory = React.FC<PageHeroProps> & {};

const PageHero: PageHeroFactory = (props) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <div role="presentation" className={clsx('v2-page-hero', className)} {...forwardedProps}>
      <div className="v2-page-hero-layout">{children}</div>
    </div>
  );
};

PageHero.displayName = '@v2/Page.Hero';
export { PageHero, type PageHeroProps, type PageHeroFactory };
