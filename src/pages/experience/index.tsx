import { Text, Title } from '@/core';
import { ExperienceError } from './experience-error';
import { Hero, Main, Page, Section } from '@/common';

type ExperienceRouteFactory = React.FC<{}> & {
  Error: typeof ExperienceError;
};

const Experience: ExperienceRouteFactory = () => (
  <Page>
    <Hero title={<Title h1>Experience</Title>} />
    <Main>
      <Section>
        <Title h2>Section Title</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum ab corrupti
          eos repellendus maiores hic quo nulla cum, dolorem soluta quis saepe aliquid quibusdam?
          Doloribus veritatis corrupti consequuntur eius.
        </Text>
      </Section>
    </Main>
  </Page>
);

Experience.Error = ExperienceError;
Experience.displayName = '@v2/Experience.Route';
export { Experience };
