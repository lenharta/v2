import { Hero } from '@/app/components';
import { Title } from '@/core';

export const SandboxHero: React.FC = () => {
  return (
    <Hero>
      <Title>Sandbox</Title>
    </Hero>
  );
};

SandboxHero.displayName = '@v2/route/Sandbox.Hero';
