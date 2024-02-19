import { Page } from '@/app/layouts';
import { Space, Stack, Text, Title } from '@/common';

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

export const Home = () => {
  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <HomeOverview />
        <Space size="sm" />
      </Page.Content>
    </Page>
  );
};
