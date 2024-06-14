import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/common';

const SandboxFloating: React.FC<{}> = () => (
  <React.Fragment>
    <Hero title="Sandbox | Floating" />
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

SandboxFloating.displayName = '@v2/Route.Sandbox.Floating';
export { SandboxFloating };
