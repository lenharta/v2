import { Page } from '@app/components';
import { Title } from '@core';

type OverviewHeroFactory = React.FC<{}> & {
  Title: React.FC<{}>;
};

const OverviewHeroTitle: OverviewHeroFactory['Title'] = () => (
  <Title className="v2-overview-hero-title" h1>
    <span className="v2-overview-hero-title-line-1">Front-End Engineer,</span>
    <span className="v2-overview-hero-title-line-2">Human-Centered Problem Solver.</span>
  </Title>
);

const OverviewHero: OverviewHeroFactory = ({}) => (
  <Page.Hero>
    <OverviewHero.Title />
  </Page.Hero>
);

OverviewHero.Title = OverviewHeroTitle;
OverviewHero.Title.displayName = '@v2/Overview.Hero.Title';
OverviewHero.displayName = '@v2/Overview.Hero';
export { OverviewHero };
