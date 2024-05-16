import React from 'react';
import { Text, Title } from '@/core';
import { SandboxError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface SandboxProps {}

type SandboxComponent = React.FC<SandboxProps> & {
  Error: typeof SandboxError;
};

const Sandbox: SandboxComponent = () => {
  return (
    <Page>
      <Hero>
        <Title>Sandbox</Title>
      </Hero>
      <Main>
        <Section>
          <Title>Section Title</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam ex recusandae
            velit sequi quae qui! Animi ea unde, asperiores ratione dolorem facere consectetur fuga
            iusto, quae impedit perferendis deserunt.t
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

Sandbox.Error = SandboxError;
Sandbox.displayName = '@v2/Sandbox';
export { Sandbox };
