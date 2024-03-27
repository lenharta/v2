import { Page } from '@/app/components';
import { HomeHero } from './HomeHero';
import { HomeOverview } from './HomeOverview';
// import { HomeTimeline } from './HomeTimeline';
// import { HomeKeynote } from './HomeKeynote';

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <HomeOverview />
      {/* <HomeTimeline /> */}
      {/* <HomeKeynote /> */}
    </Page.Content>
  </Page>
);
