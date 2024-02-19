import { PageHero } from './Hero';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageContent } from './Content';
import { PageContainer } from './Container';
import { GlobalControl } from '@/app/components';
import type { Core } from '@/types/core';

export type PageProps = {};

export type PageFactory = Core.BaseFactory<{
  props: PageProps;
  component: 'div';
  components: {
    Container: typeof PageContainer;
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
      <Page.Footer />
    </div>
  );
};

Page.displayName = '@v2/Page';

Page.Container = PageContainer;
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
