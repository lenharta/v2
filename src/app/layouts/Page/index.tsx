import { GlobalControl } from '@/app/components/GlobalControl';
import { PageContent } from './Content';
import { PageFooter } from './Footer';
import { PageHeader } from './Header';
import { PageHero } from './Hero';

import type { Core } from '@/types/core';

export type PageProps = {};

export type PageFactory = Core.BaseFactory<{
  props: PageProps;
  component: 'div';
  components: {
    Content: typeof PageContent;
    Footer: typeof PageFooter;
    Header: typeof PageHeader;
    Hero: typeof PageHero;
  };
}>;

export const Page: PageFactory = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} className="Page">
      <Page.Header />
      {children}
      <GlobalControl />
    </div>
  );
};

Page.displayName = '@v2/Page';

Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
