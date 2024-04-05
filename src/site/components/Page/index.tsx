import clsx from 'clsx';
import { Transition } from '@/core';
import { useAppState } from '@/store';
import { usePageTransition } from '@/site/hooks';

import { PageHero } from './Hero';
import { PageContent } from './Content';
import { Core, Factory } from '@/types';
import { factory } from '@/core/factory';

export interface PageProps extends Core.BaseProps {}

export type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
  comps: {
    Hero: typeof PageHero;
    Content: typeof PageContent;
  };
}>;

export const Page = factory<PageFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;

  const { location } = useAppState();
  const { pathname } = location ?? {};
  const pageTransition = usePageTransition({ pathname });

  return (
    <Transition {...pageTransition}>
      {(transitionStyles) => (
        <div
          {...otherProps}
          className={clsx('page-layout', className)}
          style={transitionStyles}
          ref={ref}
        >
          {children}
        </div>
      )}
    </Transition>
  );
});

Page.displayName = '@v2/site/Page';
Page.Content = PageContent;
Page.Hero = PageHero;
