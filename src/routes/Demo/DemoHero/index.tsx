import { Page } from '@app/components';
import { Title } from '@core';

interface DemoHeroProps {
  title?: string | undefined;
}

const DemoHero: React.FC<DemoHeroProps> = ({ title = 'Demo' }) => (
  <Page.Hero>
    <Title h1>{title}</Title>
  </Page.Hero>
);

export { DemoHero };
