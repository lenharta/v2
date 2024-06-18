import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/common';

const SandboxText: React.FC<{}> = () => (
  <React.Fragment>
    <Hero title="Sandbox | Text" />
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

SandboxText.displayName = '@v2/Route.Sandbox.Text';
export { SandboxText };
