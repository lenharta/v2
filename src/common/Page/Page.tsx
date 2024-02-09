import clsx from 'clsx';
import * as React from 'react';
import type { BaseProps } from '@/types';

import {
  PageContainer,
  PageContent,
  PageFooter,
  PageHeader,
  PageHero,
  PageSection,
} from './partials';

export type PageProps = BaseProps<'div'> & {};

export type PageComponent = React.FC<PageProps> & {
  Container: typeof PageContainer;
  Content: typeof PageContent;
  Section: typeof PageSection;
  Header: typeof PageHeader;
  Footer: typeof PageFooter;
  Hero: typeof PageHero;
};

export const Page: PageComponent = (props) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('page', className);
  return (
    <div {...otherProps} className={clxss}>
      {children}
    </div>
  );
};

Page.Container = PageContainer;
Page.Content = PageContent;
Page.Section = PageSection;
Page.Header = PageHeader;
Page.Footer = PageFooter;
Page.Hero = PageHero;
