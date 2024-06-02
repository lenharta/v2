import React from 'react';
import { Stack, Text, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const SandboxColors = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Colors</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            <Title h2>Color | Red</Title>
            <Text>Demo</Text>
            <Title h2>Color | Orange</Title>
            <Text>Demo</Text>
            <Title h2>Color | Yellow</Title>
            <Text>Demo</Text>
            <Title h2>Color | Green</Title>
            <Text>Demo</Text>
            <Title h2>Color | Mint</Title>
            <Text>Demo</Text>
            <Title h2>Color | Teal</Title>
            <Text>Demo</Text>
            <Title h2>Color | Cyan</Title>
            <Text>Demo</Text>
            <Title h2>Color | Blue</Title>
            <Text>Demo</Text>
            <Title h2>Color | Indigo</Title>
            <Text>Demo</Text>
            <Title h2>Color | Purple</Title>
            <Text>Demo</Text>
            <Title h2>Color | Pink</Title>
            <Text>Demo</Text>
            <Title h2>Color | Brown</Title>
            <Text>Demo</Text>
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxColors };
