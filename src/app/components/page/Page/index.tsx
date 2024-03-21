import * as React from 'react';

import { useStore } from '@/store';
import { useIsomorphicEffect } from '@/hooks';
import { TransitionProps } from '@/common/Transition/types';
import { Transition } from '@/common';

import { Footer } from '../../footer';
import { PageHero } from '../PageHero';
import { PageLayout } from '../PageLayout';
import { PageContent } from '../PageContent';
import { PageSection } from '../PageSection';

type PageComponent = React.FC<{ children?: React.ReactNode }> & {
  Hero: typeof PageHero;
  Layout: typeof PageLayout;
  Content: typeof PageContent;
  Section: typeof PageSection;
};

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

export const Page: PageComponent = (props) => {
  const { children } = props;
  const { location } = useStore();
  const pageTransition = usePageTransition(location?.pathname);
  return (
    <Transition {...pageTransition}>
      {(transitionStyles) => (
        <Page.Layout style={transitionStyles}>
          {children}
          <Footer />
        </Page.Layout>
      )}
    </Transition>
  );
};

Page.Hero = PageHero;
Page.Layout = PageLayout;
Page.Content = PageContent;
Page.Section = PageSection;
Page.displayName = '@v2/Page';
