import * as React from 'react';
import { Page } from '@app';
import { SandboxHero } from './SandboxHero';
import { Chip } from '@core';

type SandboxFactory = React.FC<{}> & {
  Hero: typeof SandboxHero;
};

const SandboxChip = () => (
  <React.Fragment>
    <Chip>Chip</Chip>
  </React.Fragment>
);

const Sandbox: SandboxFactory = ({}) => (
  <Page>
    <Sandbox.Hero />
    <SandboxChip />
  </Page>
);

Sandbox.Hero = SandboxHero;
Sandbox.displayName = '@v2/Sandbox.Route';
export { Sandbox };
