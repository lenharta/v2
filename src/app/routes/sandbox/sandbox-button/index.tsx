import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/common';

const SandboxButton: React.FC<{}> = () => (
  <React.Fragment>
    <Hero title="Sandbox | Button" />
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

SandboxButton.displayName = '@v2/Route.Sandbox';
export { SandboxButton };
