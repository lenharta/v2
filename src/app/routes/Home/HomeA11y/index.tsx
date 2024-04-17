import { Section } from '@/app/common';
import { Box, Text } from '@/core';

export const HomeA11y = () => (
  <Section className="sec-home-a11y">
    <Section.Content className="sec-home-a11y-content">
      <Box className="sec-home-a11y-box" data-position="left" scheme="secondary">
        <Text>
          Improving the <span className="accent-text">human-technology </span>
          relationship with accessible digital experiences for the modern world
          <span className="accent-text">.</span>
        </Text>
      </Box>
      <Box className="sec-home-a11y-box" data-position="right">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime cumque odio quam
          totam natus doloribus culpa a perspiciatis sunt? Dignissimos et rem accusantium excepturi
          reiciendis velit beatae culpa eius.
        </Text>
      </Box>
    </Section.Content>
  </Section>
);
