import { AnimatedGrid } from '@/app/components';
import { Title } from '@/common';

export const HomeHero = () => {
  return (
    <div className="sec-home-hero">
      <div className="sec-home-hero-content">
        <Title h2>UI Engineer</Title>
        <Title h1>Andrew Lenhart</Title>
      </div>
      <div className="sec-home-hero-pattern">
        <AnimatedGrid animating={true} />
      </div>
    </div>
  );
};
