import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { useAppState } from '@/store';
import { Core, Factory } from '@/types';
import { usePageTransition } from '@/site/hooks';
import { PageContent } from './Content';
import { PageHero } from './Hero';

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
  const { config } = usePageTransition({ pathname });

  return (
    <Transition {...config}>
      {(transitionStyles) => (
        <div {...otherProps} className={clsx('page', className)} style={transitionStyles} ref={ref}>
          {children}
        </div>
      )}
    </Transition>
  );
});

Page.displayName = '@v2/site/Page';
Page.Content = PageContent;
Page.Hero = PageHero;
