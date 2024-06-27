import * as React from 'react';
import { Text } from '@/core';
import { Section } from '@/app';

const HomeHighlights: React.FC<{}> = () => {
  return (
    <Section className="v2-home-highlights">
      <Text>Home.Highlights</Text>
    </Section>
  );
};

HomeHighlights.displayName = '@v2/Home.Highlights';
