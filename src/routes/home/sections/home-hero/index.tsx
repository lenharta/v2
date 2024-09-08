import { Hero } from '@/app';
import { Title } from '@/core';

export const HomeHero = () => {
  return (
    <Hero>
      <Title className="v2-home-hero-title" h1>
        <span className="v2-home-hero-title-line-1">Front-End Engineer,</span>
        <span className="v2-home-hero-title-line-2">Human-Centered Problem Solver.</span>
      </Title>
    </Hero>
  );
};
