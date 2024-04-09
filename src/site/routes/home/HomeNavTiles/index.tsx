import { Box, Section } from '@/site/components';

export const HomeNavTiles = () => (
  <Section className="sec-home-nav-tiles">
    <Section.Content className="sec-home-nav-tiles-content">
      <Box className="sec-home-nav-tiles-box" data-position="left"></Box>
      <Box className="sec-home-nav-tiles-box" data-position="right"></Box>
    </Section.Content>
  </Section>
);
