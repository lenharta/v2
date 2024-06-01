import React from 'react';
import { Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxCheckbox = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Checkbox</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Checkbox | Default</Title>
            <Text>Demo</Text>
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxCheckbox };
