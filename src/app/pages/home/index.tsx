import { Page } from '@/app/components';
import { HomeHero } from './HomeHero';
import { HomeKeynote } from './HomeKeynote';
import { HomeTimeline } from './HomeTimeline';

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <HomeTimeline />
      <HomeKeynote />
    </Page.Content>
  </Page>
);
