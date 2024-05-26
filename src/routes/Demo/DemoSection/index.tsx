import { Section } from '@/common';
import { DemoRoot } from '../DemoRoot';
import { Box, Text, Title } from '@/core';

const DemoSection = () => {
  return (
    <DemoRoot>
      <Box className="v2-demo-box-section">
        <Section>
          <Title>Section Title</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi debitis consequatur
            cumque saepe recusandae eligendi optio beatae doloribus minus, atque maxime architecto,
            illum aliquam, voluptatem minima tempore corporis iure?
          </Text>
        </Section>
      </Box>
    </DemoRoot>
  );
};

export { DemoSection };
