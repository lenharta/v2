import clsx from 'clsx';
import * as React from 'react';
import { PageLink } from './PageLink';
import { PageHero } from './PageHero';
import { PageSection } from './PageSection';
import { Footer } from '../Footer';

interface PageProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

type PageFactory = React.FC<PageProps> & {
  Link: typeof PageLink;
  Hero: typeof PageHero;
  Section: typeof PageSection;
};

const Page: PageFactory = (props) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <div className={clsx('v2-page', className)} {...forwardedProps}>
      {children}
      <Footer />
    </div>
  );
};

Page.Link = PageLink;
Page.Hero = PageHero;
Page.Section = PageSection;
Page.displayName = '@v2/Page';
export { Page, type PageProps };
