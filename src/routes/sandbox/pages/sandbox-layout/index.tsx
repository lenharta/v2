import * as React from 'react';
import { Demo } from '@/demo';
import { DEMO } from '@/types';
import { Title } from '@/core';
import { Hero, Main } from '@/app';

export type SandboxLayoutProps = {
  containerStyle?: React.CSSProperties;
  controls: DEMO.ControlOptions[];
  children: React.ReactNode;
  name: string;
};

export const SandboxLayout = (props: SandboxLayoutProps) => {
  const { children, controls, containerStyle, name } = props;
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Sandbox | <span className="v2-accent-text">{name}</span>
        </Title>
      </Hero>
      <Main className="v2-sandbox-layout-main">
        <Demo containerStyle={containerStyle} controls={controls}>
          {children}
        </Demo>
      </Main>
    </React.Fragment>
  );
};
