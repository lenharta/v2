import { PageRootComponent } from '@/types';
import { PageContainer } from './Container';
import { PageContent } from './Content';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageHero } from './Hero';

export const PageProgress = () => {};

export const Page: PageRootComponent = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} className="Page">
      {children}
    </div>
  );
};

Page.displayName = '@v2/Page';

Page.Container = PageContainer;
Page.Content = PageContent;
Page.Header = PageHeader;
Page.Footer = PageFooter;
Page.Hero = PageHero;
