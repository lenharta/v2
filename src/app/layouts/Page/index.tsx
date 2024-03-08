import clsx from 'clsx';
import * as React from 'react';

import { PageMenu } from './Menu';
import { PageHero } from './Hero';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageContent } from './Content';

// import { SideMenu } from '@/app/components';
// import { GlobalControl } from '@/app/components';

export type PageProps = React.ComponentPropsWithoutRef<'div'>;

export type PageComponent = React.FC<PageProps> & {
  Content: typeof PageContent;
  Footer: typeof PageFooter;
  Header: typeof PageHeader;
  Hero: typeof PageHero;
  Menu: typeof PageMenu;
};

export const Page: PageComponent = (props) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('page', className);
  return (
    <div {...otherProps} className={clxss}>
      <Page.Header />
      {children}
    </div>
  );
};

Page.displayName = '@v2/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
Page.Menu = PageMenu;
