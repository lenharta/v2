import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxTileRouteFactory = React.FC<{}> & {};

const SandboxTile: SandboxTileRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Tile</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxTile.displayName = '@v2/Sandbox.Tile.Route';
export { SandboxTile };
