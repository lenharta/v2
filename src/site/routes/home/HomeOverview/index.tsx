import { Text, Title } from '@/core';
import { Box, Section } from '@/site/components';

export const HomeOverview = () => {
  return (
    <Section scheme="primary" className="sec-home-overview">
      <Section.Content className="sec-home-overview-content">
        <Box className="sec-home-overview-box" data-position="left" scheme="secondary">
          <Title h2>Overview</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </Box>
        <Box className="sec-home-overview-box" data-position="right">
          <Title h2>Highlights</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </Box>
      </Section.Content>
    </Section>
  );
};
