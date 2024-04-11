import clsx from 'clsx';
import { factory } from '@/core/factory';
import { useAppState } from '@/store';
import { Core, Factory } from '@/types';
import { Box, Transition } from '@/core';
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
        <Box
          {...otherProps}
          className={clsx('page-layout', className)}
          style={{ ...style, ...transitionStyles }}
          ref={ref}
        >
          {children}
        </Box>
      )}
    </Transition>
  );
});

Page.displayName = '@v2/site/Page';
Page.TileGroup = PageTileGroup;
Page.Content = PageContent;
Page.Hero = PageHero;
Page.Tile = PageTile;
