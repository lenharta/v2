import * as React from 'react';
import { Page, Section } from '@/app/layouts';
import { Button, Space, Stack, Text, Title } from '@/common';

export const Home = () => {
  const [scheme, setScheme] = React.useState<'primary' | 'secondary' | undefined>('secondary');

  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <Section scheme={scheme} py="xl">
          <Title component="h2" size="xxs" scheme="accent-high">
            Overview
          </Title>
          <Title component="h3">
            Front-end Software Engineer, Human-Centered Problem Solver, Byte-Sized Brillance Maker.
          </Title>
          <Stack gap="xxs">
            <Text scheme="med">
              Striving to improve the human relationship with technology by designing and building
              meaningful digital experiences for the modern world. wealth of expertise in modern
              front-end technologies such as TypeScript, React.js, CSS, and more.
            </Text>
            <Text scheme="med">
              I have been instrumental in crafting intuitive and responsive user interfaces across
              various global financial platforms. Most recently as part of an engineering team
              delivering a fully integrated UI library for a multi-billion dollar financial
              institution.
            </Text>
          </Stack>
        </Section>
        <Section scheme={scheme === 'primary' ? 'secondary' : 'primary'} py="xl">
          <Title component="h2" size="xxs" scheme="accent-high">
            Overview
          </Title>
          <Title component="h3">
            Front-end Software Engineer, Human-Centered Problem Solver, Byte-Sized Brillance Maker.
          </Title>
          <Stack gap="xxs">
            <Text scheme="med">
              Striving to improve the human relationship with technology by designing and building
              meaningful digital experiences for the modern world. wealth of expertise in modern
              front-end technologies such as TypeScript, React.js, CSS, and more.
            </Text>
            <Text scheme="med">
              I have been instrumental in crafting intuitive and responsive user interfaces across
              various global financial platforms. Most recently as part of an engineering team
              delivering a fully integrated UI library for a multi-billion dollar financial
              institution.
            </Text>
          </Stack>
        </Section>
        <Section>
          <Button onClick={() => setScheme(undefined)}>Default</Button>
          <Button onClick={() => setScheme('primary')}>Primary</Button>
          <Button onClick={() => setScheme('secondary')}>Secondary</Button>
        </Section>
        <Space size="xs" />
      </Page.Content>
    </Page>
  );
};
