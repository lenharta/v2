import React from 'react';
import { Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxImage = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Image</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Image | Default</Title>
            <Text>Demo</Text>
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxImage };
