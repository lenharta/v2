import * as React from 'react';
import { GridPattern } from '@/app/pages';

export const HomeHero = () => {
  const [isAnimating, setAnimating] = React.useState<boolean>();

  React.useEffect(() => {
    setTimeout(() => setAnimating(true), 500);
    // setTimeout(() => setAnimating(false), 3200);
  }, []);

  return (
    <div className="sec-home-hero">
      <div className="sec-home-content"></div>
      <div className="sec-home-hero-pattern">
        <GridPattern isAnimating={isAnimating} />
      </div>
    </div>
  );
};

// export const HomeHero = () => {
//   const [isAnimating, setAnimating] = React.useState<boolean>();

//   React.useLayoutEffect(() => {
//     setTimeout(() => setAnimating(true), 500);
//     setTimeout(() => setAnimating(false), 2500);
//     // return () => setAnimating(false);
//   }, []);

//   return (
//     <div className="sec-home-hero">
//       <div className="sec-home-hero-content">
//         <Title h1>Andrew Lenhart</Title>
//         <Title h2>Software Engineer</Title>
//       </div>
//       <HomeHeroFilter />
//       <div className="sec-home-hero-pattern" data-animation-enter={isAnimating}>
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//         <HomeHeroPatternRow />
//       </div>
//     </div>
//   );
// };

// const HomeHeroFilter = () => {
//   return <div className="sec-home-hero-filter" />;
// };

// const HomeHeroPatternRow = () => {
//   return (
//     <div className="sec-home-hero-pattern-row">
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//       <div className="sec-home-hero-pattern-box" />
//     </div>
//   );
// };
