import { Page } from '@/app';
import { Title } from '@/core';

const OverviewHero: React.FC<{}> = ({}) => (
  <Page.Hero>
    <Title className="v2-overview-hero-title" h1>
      <span className="v2-overview-hero-title-line-1">Front-End Engineer,</span>
      <span className="v2-overview-hero-title-line-2">Human-Centered Problem Solver.</span>
    </Title>
  </Page.Hero>
);

export { OverviewHero };
