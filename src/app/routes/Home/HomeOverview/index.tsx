import { Section } from '@/app/common';
import { Box, Text } from '@/core';

type HomeOverviewComponent = React.FC<{}>;

const HomeOverviewBoxLeft = () => (
  <Box className="sec-home-overview-box--left">
    <Text>
      Seeking opportunities with a team of talented engineers that impact and drive transformative
      thinking.
    </Text>
  </Box>
);

const HomeOverviewBoxRight = () => (
  <Box className="sec-home-overview-box--right">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus blanditiis eligendi
      reprehenderit fuga maxime qui et architecto voluptatum! Ex temporibus dolorum doloremque
      explicabo ab sapiente magni consectetur atque autem dolore?
    </Text>
  </Box>
);

export const HomeOverview: HomeOverviewComponent = ({}) => {
  return (
    <Section className="sec-home-overview">
      <Section.Content className="sec-home-overview-content">
        <HomeOverviewBoxLeft />
        <HomeOverviewBoxRight />
      </Section.Content>
    </Section>
  );
};
