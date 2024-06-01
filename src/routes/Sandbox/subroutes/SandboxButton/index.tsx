import React from 'react';
import { Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxButton = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Button</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Button | Default</Title>
            <Text>Demo</Text>
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxButton };
