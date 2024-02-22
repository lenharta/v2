import { Page } from '@/app/layouts';

import { HomeHero } from './sections/hero';
import { HomeOverview } from './sections/overview';
import { HomeExperience } from './sections/experience';

export const Home = () => {
  return (
    <Page>
      <Page.Hero children={<HomeHero />} />
      <Page.Content>
        <HomeOverview />
        <HomeExperience />
      </Page.Content>
    </Page>
  );
};
