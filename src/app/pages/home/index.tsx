import { Page } from '@/app/layouts';
import { Button, Space, Stack, Text, Title } from '@/common';
import { Size, SizeExpanded } from '@/types/common';
import React from 'react';

const HomeOverview = () => (
  <section className="Section" id="Section-home-overview">
    <Title component="h2" size="xs" className="Section-anchor-title" accented>
      Overview
    </Title>
    <Title component="h3" className="Section-headline">
      Front-end Software Engineer, Human-Centered Problem Solver, Byte-Sized Brillance Maker.
    </Title>
    <Stack gap="xxs" className="Section-content">
      <Text>
        Striving to improve the human relationship with technology by designing and building
        meaningful digital experiences for the modern world. wealth of expertise in modern front-end
        technologies such as TypeScript, React.js, CSS, and more.
      </Text>
      <Text>
        I have been instrumental in crafting intuitive and responsive user interfaces across various
        global financial platforms. Most recently as part of an engineering team delivering a fully
        integrated UI library for a multi-billion dollar financial institution.
      </Text>
    </Stack>
  </section>
);

const useSizeControls = () => {
  const [size, setSize] = React.useState<SizeExpanded | undefined>();
  const data: SizeExpanded[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  return [size, { setSize, data }] as const;
};

const DemoStackComponent = () => {
  const [size, { setSize, data }] = useSizeControls();
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '50%', display: 'flex' }}>
        <Button onClick={() => setSize(undefined)} children="RESET" />
        {data.map((size) => (
          <Button key={size} onClick={() => setSize(size)} children={size} />
        ))}
      </div>
      <Stack gap={size}>
        <div style={{ height: 100, width: 200, backgroundColor: 'palegoldenrod' }} />
        <div style={{ height: 100, width: 200, backgroundColor: 'palegoldenrod' }} />
        <div style={{ height: 100, width: 200, backgroundColor: 'palegoldenrod' }} />
        <div style={{ height: 100, width: 200, backgroundColor: 'palegoldenrod' }} />
        <div style={{ height: 100, width: 200, backgroundColor: 'palegoldenrod' }} />
      </Stack>
    </div>
  );
};

export const Home = () => {
  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <HomeOverview />
        <Space size="sm" />
        <DemoStackComponent />
      </Page.Content>
    </Page>
  );
};
