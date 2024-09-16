import { Hero } from '@/app';
import { Title } from '@/core';

type HomeHeroComponent = React.FC<{}>;

export const HomeHero: HomeHeroComponent = ({}) => {
  return (
    <Hero>
      <Title className="v2-home-hero-title" h1>
        <span>Software Engineer,</span>
        <span>Human-Centered Problem Solver.</span>
      </Title>
    </Hero>
  );
};
