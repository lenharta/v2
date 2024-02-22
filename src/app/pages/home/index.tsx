import { Page } from '@/app/layouts';
import { SectionHomeOverview } from './sections/overview';
import { SectionHomeExperience } from './sections/experience';

export const Home = () => {
  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <SectionHomeOverview />
        <SectionHomeExperience />
      </Page.Content>
    </Page>
  );
};
