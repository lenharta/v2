import { Title } from '@/core';
import { Box, Page } from '@/site/components';

export const ToolboxHero = () => {
  return (
    <Page.Hero className="sec-toolbox-hero">
      <Box className="sec-toolbox-hero-content">
        <Title className="sec-toolbox-hero-title">Toolbox</Title>
      </Box>
    </Page.Hero>
  );
};

export function Toolbox() {
  return (
    <Page>
      <ToolboxHero />
      <Page.Content></Page.Content>
    </Page>
  );
}
