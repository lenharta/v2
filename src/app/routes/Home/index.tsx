import { Page } from '@/app/page';
import { Title } from '@/core';

type HomeRouteComponent = React.FC<{}>;

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Home Route</Title>
      </Page.Hero>
      <Page.Content>
        <p className="accent-text">Some Accent Text Here.</p>
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
