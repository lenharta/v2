import { Page } from '@/app/layouts';

import { HomeHero } from './sections/hero';
import { HomeOverview } from './sections/overview';
import { HomeExperience } from './sections/experience';

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <HomeExperience />
      </Page.Content>
    </Page>
  );
};
