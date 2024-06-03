import { Text, Title } from '@/core';
import { LandingError } from './landing-error';
import { Hero, Main, Page, Section } from '@/common';

type LandingRouteFactory = React.FC<{}> & {
  Error: typeof LandingError;
};

const Landing: LandingRouteFactory = () => (
  <Page>
    <Hero title={<Title h1>Landing</Title>} />
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

Landing.Error = LandingError;
Landing.displayName = '@v2/Landing.Route';
export { Landing };
