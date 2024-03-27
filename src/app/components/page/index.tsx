import * as React from 'react';
import { useStore } from '@/store';
import { Transition } from '@/common';
import { TransitionProps } from '@/common/Transition/types';
import { useIsomorphicEffect } from '@/hooks';

import { Footer } from '../footer';
import { Header } from '../header';
import { Actions } from '../actions';

import { PageHero } from './PageHero';
import { PageLayout } from './PageLayout';
import { PageContent } from './PageContent';
import { PageComponentType } from './types';

function usePageTransition(pathname?: string): Omit<TransitionProps, 'children'> {
  const [mounted, setMounted] = React.useState<boolean>(false);

  useIsomorphicEffect(() => {
    if (mounted === false) setMounted(true);
  }, [pathname]);

  return {
    mounted,
    timingFunction: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    duration: 1000,
    transition: {
      transitionProperty: 'opacity',
      in: { opacity: 1, transitionTimingFunction: 'cubic-bezier(0, 0, 0.3, 1)' },
      out: { opacity: 0, transitionTimingFunction: 'cubic-bezier(0.4, 0.14, 1, 1)' },
    },
  };
}

export const Page: PageComponentType = (props) => {
  const { children } = props;
  const { location } = useStore();
  const pageTransition = usePageTransition(location?.pathname);
  return (
    <>
      <Header />
      <Actions />
      <Transition {...pageTransition}>
        {(transitionStyles) => (
          <Page.Layout style={transitionStyles}>
            {children}
            <Footer />
          </Page.Layout>
        )}
      </Transition>
    </>
  );
};

Page.Hero = PageHero;
Page.Layout = PageLayout;
Page.Content = PageContent;
Page.displayName = '@v2/Page';
