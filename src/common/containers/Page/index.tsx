import React from 'react';
import { factory } from '@/core/factory';
import { useLocation } from 'react-router-dom';
import { Core, Factory } from '@/types';
import { Box, Transition } from '@/core';

interface PageProps {
  children: React.ReactNode;
}

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
}>;

const pageTransition: Partial<Core.TransitionProps> = {
  duration: 400,
  timingFunction: 'ease-in-out',
  transition: {
    transitionProperty: 'opacity',
    out: { opacity: 0 },
    in: { opacity: 1 },
  },
};

const Page = factory<PageFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;

  const location = useLocation();
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isMounted !== true) {
      setMounted(true);
    }
    if (isMounted === true) {
      setMounted(false);
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Transition {...pageTransition} mounted={isMounted}>
        {(transitionStyles) => (
          <Box
            {...forwardedProps}
            style={transitionStyles}
            className="v2-page"
            role="document"
            ref={ref}
          >
            {children}
          </Box>
        )}
      </Transition>
    </React.Fragment>
  );
});

Page.displayName = '@v2/Page';
export { Page, type PageProps };
