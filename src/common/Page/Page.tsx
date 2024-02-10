import clsx from 'clsx';
import { Factory, createFactory } from '@/factory';
import { PageContainer } from './Container';
import { PageContent } from './Content';
import { PageSection } from './Section';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageHero } from './Hero';
import { useThemeCTX } from '@/store';

export type PageProps = {};

export type PageFactory = Factory.Config<{
  props: PageProps;
  component: 'div';
  components: {
    Container: typeof PageContainer;
    Content: typeof PageContent;
    Section: typeof PageSection;
    Header: typeof PageHeader;
    Footer: typeof PageFooter;
    Hero: typeof PageHero;
  };
}>;

const ScrollProgress = () => {
  const { state } = useThemeCTX();
  return <div className="scrollprogress" data-accent-color-bkgd-solid={state.accent} />;
};

export const Page = createFactory<PageFactory>((props) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('page', className);
  return (
    <div {...otherProps} className={clxss}>
      <ScrollProgress />
      <Page.Header />
      {children}
      <Page.Footer />
    </div>
  );
});

Page.Container = PageContainer;
Page.Content = PageContent;
Page.Section = PageSection;
Page.Header = PageHeader;
Page.Footer = PageFooter;
Page.Hero = PageHero;
