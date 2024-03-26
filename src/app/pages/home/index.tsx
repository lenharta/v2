import { Page } from '@/app/components';
import { HomeHero } from './HomeHero';
import { HomeKeynote } from './HomeKeynote';
import { HomeTimeline } from './HomeTimeline';
import { HomeOverview } from './HomeOverview';

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <HomeOverview />
      <HomeTimeline />
      <HomeKeynote />
    </Page.Content>
  </Page>
);
