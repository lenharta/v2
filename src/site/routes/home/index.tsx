import { Page } from '@/site/components';
import { HomeHero } from './HomeHero';
import { HomeOverview } from './HomeOverview';
import { Tile } from '@/core';

export function Home() {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <Tile component="button"></Tile>
      </Page.Content>
    </Page>
  );
}
