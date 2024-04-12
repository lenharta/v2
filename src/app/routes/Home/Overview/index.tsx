import { Section } from '@/app/section';
import { Box, Text } from '@/core';

type HomeOverviewComponent = React.FC<{}>;

export const HomeOverview: HomeOverviewComponent = ({}) => {
  return (
    <Section className="sec-home-overview">
      <Section.Content className="sec-content-home-overview">
        <Box data-position="left">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, facere quibusdam.
            Amet quas recusandae nesciunt dolor?
          </Text>
        </Box>
        <Box data-position="right">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, facere quibusdam.
            Amet quas recusandae nesciunt dolor?
          </Text>
        </Box>
      </Section.Content>
    </Section>
  );
};
