import * as React from 'react';
import { useStore } from '@/store';
import { Transition } from '@/common';
import { TransitionProps } from '@/common/Transition/types';
import { useIsomorphicEffect } from '@/hooks';
import { PageLayout } from '../PageLayout';
import { PageContent } from '../PageContent';
import { PageSection } from '../PageSection';
import { FooterLayout } from '../../footer';
import { PageHero, PageHeroProps } from '../PageHero';

export interface PageProps {
  children?: React.ReactNode;
  heroProps?: PageHeroProps;
}

export interface PageComponents {
  Hero: typeof PageHero;
  Layout: typeof PageLayout;
  Content: typeof PageContent;
  Section: typeof PageSection;
}

const PAGE_TRANSITION: Partial<TransitionProps> = {
  timingFunction: 'ease',
  duration: 1500,
  transition: {
    transitionProperty: 'opacity',
    in: { opacity: 1 },
    out: { opacity: 0 },
  },
};

export const Page: React.FC<PageProps> & PageComponents = (props: PageProps) => {
  const { heroProps, children } = props;

  const store = useStore();
  const [transition, setTransition] = React.useState<boolean>(false);

  useIsomorphicEffect(() => {
    if (transition === false) {
      setTransition(true);
    }
  }, [store.location?.pathname]);

  return (
    <Transition {...PAGE_TRANSITION} mounted={transition}>
      {(transitionStyles) => (
        <Page.Layout style={transitionStyles}>
          {heroProps && <Page.Hero {...heroProps} />}
          <Page.Content>
            {children}
            <FooterLayout />
          </Page.Content>
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
