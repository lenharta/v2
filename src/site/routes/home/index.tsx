import React from 'react';
import { Tile } from '@/core';
import { Page } from '@/site/components';
import { HomeHero } from './HomeHero';
import { HomeOverview } from './HomeOverview';

export function Home() {
  const tileRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <Tile component="button" ref={tileRef}></Tile>
      </Page.Content>
    </Page>
  );
}
