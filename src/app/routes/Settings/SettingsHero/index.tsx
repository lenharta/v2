import { Hero } from '@/app/components';
import { Title } from '@/core';

export const SettingsHero: React.FC = () => {
  return (
    <Hero>
      <Title>Settings</Title>
    </Hero>
  );
};

SettingsHero.displayName = '@v2/route/Settings.Hero';
