import React from 'react';
import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { DURATION, EASING } from '@/app/config';

export interface PageProps {
  hero?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
}

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
}>;

export const Page = factory<PageFactory>((props, ref) => {
  const { children, hero } = props;
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (mounted !== true) {
      setMounted(true);
    }

    if (mounted) {
      dispatch({ isTransition: true });
    }

    dispatch({ isTransition: undefined });
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Transition
        mounted={mounted}
        duration={DURATION.slowest}
        timingFunction="ease-in-out"
        transition={{
          transitionProperty: 'opacity',
          out: { opacity: 0 },
          in: { opacity: 1 },
        }}
      >
        {(transitionStyles) => (
          <div ref={ref} className={cx('page')} role="document" style={transitionStyles}>
            <React.Fragment>{hero && hero}</React.Fragment>
            <main className={cx('page-content')}>{children}</main>
          </div>
        )}
      </Transition>
    </React.Fragment>
  );
});

Page.displayName = '@v2/Page';
