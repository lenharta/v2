import { Title } from '@/common';
import { AnimatedGrid } from '@/app/components';
import { useThemeCTX } from '@/store';
import { DATA_HOME_SECTIONS } from '@/data';

export const HomeHero = () => {
  const { state } = useThemeCTX();
  const lang = state.lang || 'english';
  return (
    <div className="sec-home-hero">
      <div className="sec-home-hero-content">
        <Title h1>Andrew Lenhart</Title>
        <Title h2>{DATA_HOME_SECTIONS[lang].hero.title}</Title>
      </div>
      <div className="sec-home-hero-pattern">
        <AnimatedGrid animating={true} />
      </div>
    </div>
  );
};
