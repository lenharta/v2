import { Page } from '@/app/components';
import { Title } from '@/common';

export const HomeOverview = () => (
  <Page.Section className="home-sec-overview">
    <div className="home-sec-overview-left">
      <Title>Overview (left)</Title>
    </div>
    <div className="home-sec-overview-right">
      <Title>Overview (right)</Title>
    </div>
  </Page.Section>
);
