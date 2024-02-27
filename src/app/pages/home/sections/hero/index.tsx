import { Title } from '@/common';
import React from 'react';

export const HomeHero = () => {
  const [isAnimating, setAnimating] = React.useState<boolean>();

  React.useLayoutEffect(() => {
    setTimeout(() => setAnimating(true), 500);
    return () => setAnimating(undefined);
  }, []);

  return (
    <div className="sec-home-hero">
      <div className="sec-home-hero-content">
        <Title h1>Andrew Lenhart</Title>
        <Title h2>Software Engineer</Title>
      </div>
      <HomeHeroFilter />
      <div className="sec-home-hero-pattern" data-animation-enter={isAnimating}>
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
        <HomeHeroPatternRow />
      </div>
    </div>
  );
};

const HomeHeroFilter = () => {
  return <div className="sec-home-hero-filter" />;
};

const HomeHeroPatternRow = () => {
  return (
    <div className="sec-home-hero-pattern-row">
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
      <div className="sec-home-hero-pattern-box" />
    </div>
  );
};
