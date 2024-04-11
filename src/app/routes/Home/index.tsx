import { Page } from '@/app/page';
import { Title } from '@/core';
import { Section } from '@/site/components';

type HomeRouteComponent = React.FC<{}>;

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Home Route</Title>
      </Page.Hero>
      <Page.Content>
        <Section className="sec-home-overview">
          <Section.Content className="sec-content-home-overview">
            <p className="accent-text">Some Accent Text Here.</p>
          </Section.Content>
        </Section>
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
