import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/common';

const SandboxLabel: React.FC<{}> = () => (
  <React.Fragment>
    <Hero title="Sandbox | Label" />
    <Section>
      <Title>Section</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
        nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
        reiciendis fugiat, ut tenetur.
      </Text>
    </Section>
  </React.Fragment>
);

SandboxLabel.displayName = '@v2/Route.Sandbox.Label';
export { SandboxLabel };
