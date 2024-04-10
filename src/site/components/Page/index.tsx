import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { useAppState } from '@/store';
import { Core, Factory } from '@/types';
import { usePageTransition } from '@/site/hooks';

import { PageTileGroup } from './Tile/Group';
import { PageContent } from './Content';
import { PageTile } from './Tile';
import { PageHero } from './Hero';

export interface PageProps extends Core.BaseProps {}

export type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
  comps: {
    TileGroup: typeof PageTileGroup;
    Content: typeof PageContent;
    Tile: typeof PageTile;
    Hero: typeof PageHero;
  };
}>;

export const Page = factory<PageFactory>((props, ref) => {
  const { children, className, style, ...otherProps } = props;
  const { location } = useAppState();
  const { pathname } = location ?? {};
  const { config } = usePageTransition({ pathname });
  return (
    <Transition {...config}>
      {(transitionStyles) => (
        <div
          {...otherProps}
          className={clsx('page', className)}
          style={{ ...style, ...transitionStyles }}
          ref={ref}
        >
          {children}
        </div>
      )}
    </Transition>
  );
});

Page.displayName = '@v2/site/Page';
Page.TileGroup = PageTileGroup;
Page.Content = PageContent;
Page.Hero = PageHero;
Page.Tile = PageTile;
