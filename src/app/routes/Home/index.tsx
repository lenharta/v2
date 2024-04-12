import { Page } from '@/app/page';
import { HomeHero } from './Hero';
import { HomeOverview } from './Overview';

type HomeRouteComponent = React.FC<{}>;

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
