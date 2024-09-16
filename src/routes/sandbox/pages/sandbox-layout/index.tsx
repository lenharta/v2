import * as React from 'react';
import { Demo } from '@/demo';
import { DEMO } from '@/types';
import { Title } from '@/core';
import { Hero, Main } from '@/app';

export type SandboxLayoutProps = {
  controls: DEMO.ControlOptions[];
  children: React.ReactNode;
  name: string;
};

export const SandboxLayout = (props: SandboxLayoutProps) => {
  const { children, controls, name } = props;
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Sandbox | <span className="v2-accent-text">{name}</span>
        </Title>
      </Hero>
      <Main>
        <Demo controls={controls}>{children}</Demo>
      </Main>
    </React.Fragment>
  );
};
