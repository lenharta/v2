import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxTileRouteFactory = React.FC<{}> & {};

const SandboxTile: SandboxTileRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Tile" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxTile.displayName = '@v2/Sandbox.Tile.Route';
export { SandboxTile };
