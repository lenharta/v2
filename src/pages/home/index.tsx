import React from 'react';
import { Text, Tile, Title } from '@/core';
import { Hero, Page, Section, TileLink } from '@/common';
import { HomeError } from './HomeError';
import { HomeTitle } from './HomeTitle';

type HomeRouteFactory = React.FC<{}> & {
  Error: typeof HomeError;
};

const Home: HomeRouteFactory = ({}) => {
  return (
    <Page>
      <Hero title={<HomeTitle />} />
      <Section>
        <TileLink.Group variant="elevated" scheme="accent">
          <TileLink
            value="/"
            icon="arrow-northeast"
            label="Link One"
            scheme="default"
            variant="elevated"
          />
          <TileLink label="Link Two" value="/" icon="arrow-northeast" />
          <TileLink label="Link Three" value="/" icon="arrow-northeast" />
        </TileLink.Group>
      </Section>
      <Section>
        <Tile.Group variant="elevated" behavior="clickable" collapse>
          <Tile>
            <Title fz={11} fw={1} h2>
              Tile Sample
            </Title>
            <Text fz={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa tempora illo
              hic suscipit neque! Possimus, itaque eligendi. Dolore, debitis pariatur consequuntur
              autem ipsam accusantium obcaecati provident id porro! Quibusdam?
            </Text>
          </Tile>

          <Tile>
            <Title fz={11} fw={1} h2>
              Tile Sample
            </Title>
            <Text fz={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa tempora illo
              hic suscipit neque! Possimus, itaque eligendi. Dolore, debitis pariatur consequuntur
              autem ipsam accusantium obcaecati provident id porro! Quibusdam?
            </Text>
          </Tile>
          <Tile>
            <Title fz={11} fw={1} h2>
              Tile Sample
            </Title>
            <Text fz={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa tempora illo
              hic suscipit neque! Possimus, itaque eligendi. Dolore, debitis pariatur consequuntur
              autem ipsam accusantium obcaecati provident id porro! Quibusdam?
            </Text>
          </Tile>
        </Tile.Group>
      </Section>
    </Page>
  );
};

Home.Error = HomeError;
Home.displayName = '@v2/Home.Route';
export { Home };
