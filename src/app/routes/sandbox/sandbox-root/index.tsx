import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxRoot: React.FC<{}> = () => (
  <React.Fragment>
    <Hero title="Sandbox" />
    <Main>
      <Section>
        <Title>Section</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
          nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
          reiciendis fugiat, ut tenetur.
        </Text>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxRoot.displayName = '@v2/Route.Sandbox';
export { SandboxRoot };