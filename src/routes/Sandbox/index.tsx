import * as React from 'react';
import { Page } from '@app';
import { SandboxHero } from './SandboxHero';
import { Chip, Text } from '@core';
import clsx from 'clsx';

type SandboxFactory = React.FC<{}> & {
  Hero: typeof SandboxHero;
};

const SandboxChip = () => (
  <React.Fragment>
    <Chip>Chip</Chip>
  </React.Fragment>
);

type SandboxBorderProps = {
  size?: 'no' | 'sm' | 'md' | 'lg' | 'xl';
};

const SandboxBorderDemo = ({ size = 'sm' }: SandboxBorderProps) => {
  return (
    <div className={clsx('sandbox-demo-border', `sandbox-demo-border--${size}`)}>
      <Text>Sandbox Border</Text>
    </div>
  );
};

const Sandbox: SandboxFactory = ({}) => (
  <Page>
    <Sandbox.Hero />
    <SandboxChip />
    <SandboxBorderDemo />
  </Page>
);

Sandbox.Hero = SandboxHero;
Sandbox.displayName = '@v2/Sandbox.Route';
export { Sandbox };
