import * as React from 'react';
import { PageHero, PageHeroComponent } from './PageHero';
import { PageFooter, PageFooterComponent } from './PageFooter';
import { PageContent, PageContentComponent } from './PageContent';

interface PageComponents {
  Content: PageContentComponent;
  Footer: PageFooterComponent;
  Hero: PageHeroComponent;
}

type PageComponent = React.FC<{
  children?: React.ReactNode | undefined;
}>;

export const Page: PageComponent & PageComponents = ({ children }) => {
  return (
    <div className="page">
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

Page.displayName = '@v2/app/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Hero = PageHero;

export * from './error';
