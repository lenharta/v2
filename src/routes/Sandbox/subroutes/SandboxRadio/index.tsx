import React from 'react';
import { Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxRadio = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Radio</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Radio | Default</Title>
            <Text>Demo</Text>
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxRadio };
