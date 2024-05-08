import { Hero } from '@/app/components';
import { Title } from '@/core';

export const DemoHero: React.FC = () => {
  return (
    <Hero>
      <Title>Demo</Title>
    </Hero>
  );
};

DemoHero.displayName = '@v2/route/Demo.Hero';
