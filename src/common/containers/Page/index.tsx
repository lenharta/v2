import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core/factory';
import { useLocation } from 'react-router-dom';
import { Core, Factory } from '@/types';
import { Box, Transition } from '@/core';
import { useStoreDispatch, useStoreState } from '@/store';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
}>;

const pageTransition: Partial<Core.TransitionProps> = {
  duration: 600,
  timingFunction: 'ease',
  transition: {
    transitionProperty: 'opacity',
    out: { opacity: 0 },
    in: { opacity: 1 },
  },
};

const Page = factory<PageFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;

  const state = useStoreState();
  const location = useLocation();
  const dispatch = useStoreDispatch();
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    dispatch({ transition: true });

    if (isMounted !== true) {
      setMounted(true);
    }
    if (isMounted === true) {
      setMounted(false);
    }

    dispatch({ transition: undefined });
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Transition {...pageTransition} mounted={isMounted}>
        {(transitionStyles) => (
          <Box
            {...forwardedProps}
            className={clsx('v2-page', className)}
            style={transitionStyles}
            role="document"
            ref={ref}
          />
        )}
      </Transition>
    </React.Fragment>
  );
});

Page.displayName = '@v2/Page';
export { Page, type PageProps };
