import React from 'react';
import { Button, Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxButtonSizes = () => {
  return (
    <Stack gap="xs">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
    </Stack>
  );
};

const SandboxButton = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Button</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Button | Sizes</Title>
            <SandboxButtonSizes />
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxButton };
