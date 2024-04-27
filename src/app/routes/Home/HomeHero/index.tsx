import { Box, Title } from '@/core';

type HomeHeroComponent = React.FC<{}>;

export const HomeHero: HomeHeroComponent = ({}) => {
  return (
    <div className="sec-home-hero">
      <Box>
        <Title h1>Andrew Lenhart</Title>
      </Box>
    </div>
  );
};
