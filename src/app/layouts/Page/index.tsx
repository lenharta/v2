import * as React from 'react';
import { GlobalControl } from '@/app/components';

import { PageHero } from './Hero';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageContent } from './Content';
import clsx from 'clsx';
import { SideMenu } from '@/app/components';

export type PageProps = React.ComponentPropsWithoutRef<'div'>;

export type PageComponent = React.FC<PageProps> & {
  Content: typeof PageContent;
  Footer: typeof PageFooter;
  Header: typeof PageHeader;
  Hero: typeof PageHero;
};

export const Page: PageComponent = (props) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('Page', className);
  return (
    <>
      <div {...otherProps} className={clxss}>
        <Page.Header />
        {children}
        <Page.Footer />
        <GlobalControl />
        <SideMenu />
      </div>
    </>
  );
};

Page.displayName = '@v2/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
