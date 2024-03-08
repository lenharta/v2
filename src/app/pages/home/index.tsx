import { Page } from '@/app/layouts';
import { HomeHero } from './hero';
import { HomeOverview } from './overview';

export const Home = () => {
  return (
    <Page>
      <Page.Menu />
      <Page.Hero children={<HomeHero />} />
      <Page.Content>
        <HomeOverview />
      </Page.Content>
    </Page>
  );
};

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>
// I develop accessible digital experiences for the modern world.

// Section: <HomeTimeline />
// Description: A short description timeline of my experience.

// Section: <HomeChemistry />
// Description: A Table of elements for my technologies each tile should expand more on each technology.
// https://www.behance.net/gallery/139162343/Carbon-Design-System/modules/786499297
// TITLE: Do we have chemistry?
