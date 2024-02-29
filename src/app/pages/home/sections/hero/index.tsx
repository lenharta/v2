import * as React from 'react';
import { GridPattern } from '@/app/pages';

export const HomeHero = () => {
  const [isAnimating, setAnimating] = React.useState<boolean>();

  React.useEffect(() => {
    setTimeout(() => setAnimating(true), 500);
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
