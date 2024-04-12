import { Page } from '@/app/common';
import { Title } from '@/core';

type HomeHeroComponent = React.FC<{}>;

export const HomeHero: HomeHeroComponent = ({}) => {
  return (
    <Page.Hero>
      <div className="sec-home-hero">
        <div className="sec-home-hero-content">
          <Title h2>Andrew Lenhart</Title>
          <Title h1>Software Engineer</Title>
        </div>
      </div>
    </Page.Hero>
  );
};
