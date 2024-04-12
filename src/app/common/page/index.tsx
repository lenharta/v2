import * as React from 'react';
import { Transition } from '@/core';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { PageContent, PageContentComponent } from './PageContent';
import { PageFooter, PageFooterComponent } from './PageFooter';
import { PageHero, PageHeroComponent } from './PageHero';

type PageRootComponent = React.FC<{
  children?: React.ReactNode | undefined;
}>;

interface PageComponents {
  Content: PageContentComponent;
  Footer: PageFooterComponent;
  Hero: PageHeroComponent;
}

const usePageTransition = ({ pathname }: { pathname?: string }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (mounted !== true) setMounted(true);
  }, [pathname]);

  return mounted;
};

export const Page: PageRootComponent & PageComponents = ({ children }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const mounted = usePageTransition({
    pathname: location.pathname,
  });

  React.useEffect(() => {
    if (mounted) {
      dispatch({ isTransition: true });
    }
    dispatch({ isTransition: undefined });
  }, [location.pathname]);

  return (
    <Transition
      mounted={mounted}
      duration={600}
      transition={{
        transitionProperty: 'opacity',
        out: { opacity: 0 },
        in: { opacity: 1 },
      }}
    >
      {(transitionStyles) => (
        <div className="page" style={transitionStyles}>
          <React.Fragment>{children}</React.Fragment>
        </div>
      )}
    </Transition>
  );
};

Page.displayName = '@v2/app/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Hero = PageHero;
