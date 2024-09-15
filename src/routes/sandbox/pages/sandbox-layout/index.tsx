import { Hero, Main, Section } from '@/app';
import { Title } from '@/core';
import { Demo } from '@/demo';
import React from 'react';

export type SandboxLayoutProps = {
  children: React.ReactNode;
  name: string;
};

export const SandboxLayout = (props: SandboxLayoutProps) => {
  const { children, name } = props;
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Sandbox | <span className="v2-accent-text">{name}</span>
        </Title>
      </Hero>
      <Main>
        <Section>
          <Demo>{children}</Demo>
        </Section>
      </Main>
    </React.Fragment>
  );
};
