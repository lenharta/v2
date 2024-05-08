import { Hero } from '@/app/components';
import { Title } from '@/core';

export const HomeHero: React.FC = () => {
  return (
    <Hero>
      <Title>Home</Title>
    </Hero>
  );
};

HomeHero.displayName = '@v2/route/Home.Hero';
