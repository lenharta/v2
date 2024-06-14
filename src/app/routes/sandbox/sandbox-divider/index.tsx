import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/common';

const SandboxDivider: React.FC<{}> = () => (
  <React.Fragment>
    <Hero title="Sandbox | Divider" />
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

SandboxDivider.displayName = '@v2/Route.Sandbox.Divider';
export { SandboxDivider };
