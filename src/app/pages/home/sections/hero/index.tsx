import { Title } from '@/common';

export const HomeHero = () => {
  return (
    <div className="sec-home-hero">
      <div className="sec-home-hero-content">
        <Title h1>Andrew Lenhart</Title>
        <Title h2>Software Engineer</Title>
      </div>
      <HomeHeroFilter />
      <div className="sec-home-hero-pattern">
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
