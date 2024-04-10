import React from 'react';
import { Text, Tile } from '@/core';
import { Page } from '@/site/components';
import { HomeHero } from './HomeHero';
import { HomeOverview } from './HomeOverview';

export function Home() {
  const focusRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <Tile.Group>
          <Tile ref={focusRef} clickable>
            <Text>Tile Item 1</Text>
          </Tile>
          <Tile clickable>
            <Text>Tile Item 2</Text>
          </Tile>
          <Tile clickable>
            <Text>Tile Item 3</Text>
          </Tile>
        </Tile.Group>
      </Page.Content>
    </Page>
  );
}
