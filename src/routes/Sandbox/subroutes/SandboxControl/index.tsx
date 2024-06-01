import React from 'react';
import { Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxControl = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Control</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Control | Default</Title>
            <Text>Demo</Text>
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxControl };
