import clsx from 'clsx';
import * as React from 'react';
import { PageLink } from './PageLink';
import { PageHero } from './PageHero';
import { PageSection } from './PageSection';
import { Footer } from '../Footer';
import { PageIntro } from './PageIntro';
import { PageHeadline } from './PageHeadline';

interface PageProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

type PageFactory = React.FC<PageProps> & {
  Link: typeof PageLink;
  Hero: typeof PageHero;
  Intro: typeof PageIntro;
  Section: typeof PageSection;
  Headline: typeof PageHeadline;
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
Page.Intro = PageIntro;
Page.Section = PageSection;
Page.Headline = PageHeadline;
Page.displayName = '@v2/Page';
export { Page, type PageProps };
