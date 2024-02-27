import { PageHero } from './Hero';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageContent } from './Content';
import { PageContainer } from './Container';
import { GlobalControl } from '@/app/components';
import type { Core } from '@/types/core';
import React from 'react';
import { useStore, useStoreDispatch } from '@/store';
import { useLocation } from 'react-router';

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
  const store = useStore();
  const dispatch = useStoreDispatch();
  const location = useLocation();

  React.useLayoutEffect(() => {
    dispatch({ isTransition: true });
    setTimeout(() => dispatch({ isTransition: undefined }), 1500);
  }, [location]);

  console.log(store.isTransition);

  return (
    <div {...otherProps} className="Page" data-transition={store.isTransition ? true : undefined}>
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
