import { Title } from '@/core';
import { Box, Page } from '@/site/components';

export const SandboxHero = () => {
  return (
    <Page.Hero className="sec-sandbox-hero">
      <Box className="sec-sandbox-hero-content">
        <Title className="sec-sandbox-hero-title">Sandbox</Title>
      </Box>
    </Page.Hero>
  );
};

export function Sandbox() {
  return (
    <Page>
      <SandboxHero />
      <Page.Content></Page.Content>
    </Page>
  );
}
