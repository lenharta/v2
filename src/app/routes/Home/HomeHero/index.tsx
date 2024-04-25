import { Page } from '@/app/common';
import { Box, Title } from '@/core';

type HomeHeroComponent = React.FC<{}>;

export const HomeHero: HomeHeroComponent = ({}) => {
  return (
    <Page.Hero className="sec-home-hero">
      <Box>
        <Title h1>Andrew Lenhart</Title>
        <Title h2>Front-end Engineer, Human-Centered Problem Solver.</Title>
      </Box>
    </Page.Hero>
  );
};
