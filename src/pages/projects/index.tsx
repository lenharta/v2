import { Text, Title } from '@/core';
import { ProjectsError } from './projects-error';
import { Hero, Main, Page, Section } from '@/common';

type ProjectsRouteFactory = React.FC<{}> & {
  Error: typeof ProjectsError;
};

const Projects: ProjectsRouteFactory = () => (
  <Page>
    <Hero title={<Title h1>Projects</Title>} />
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

Projects.Error = ProjectsError;
Projects.displayName = '@v2/Projects.Route';
export { Projects };
