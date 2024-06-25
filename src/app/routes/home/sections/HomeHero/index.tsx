import { Hero } from '@/app';
import { Title } from '@/core';

const HomeHero: React.FC<{}> = () => (
  <Hero>
    <Title className="v2-home-title" h1>
      <span>Frontend Engineer</span>
      <span>Human-Centered Problem Solver</span>
    </Title>
  </Hero>
);

HomeHero.displayName = '@v2/Home.Hero';
export { HomeHero };
