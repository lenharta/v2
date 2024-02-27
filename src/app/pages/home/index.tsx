import { Page } from '@/app/layouts';
import { HomeHero } from './sections/hero';
import { HomeOverview } from './sections/overview';
import { GradientDivider } from '@/app/components/GradientDivider';

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <GradientDivider />
      </Page.Content>
    </Page>
  );
};
