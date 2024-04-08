import { Page } from '@/site/components';
import { HomeHero } from './HomeHero';
import { HomeOverview } from './HomeOverview';

export function Home() {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
      </Page.Content>
    </Page>
  );
}
