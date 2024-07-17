import { Page } from '@app/components';
import { Title } from '@core';

interface DemoHeroProps {
  title?: string | undefined;
}

const DemoHero: React.FC<DemoHeroProps> = ({ title }) => (
  <Page.Hero>
    {title && (
      <Title h1 className="v2-demo-title">
        Demo | <span>{title}</span>
      </Title>
    )}
  </Page.Hero>
);

export { DemoHero };
