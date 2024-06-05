import React from 'react';
import { Text } from '@/core';
import { Hero, Page, Section } from '@/common';
import { LandingError } from './LandingError';
import { LandingTitle } from './LandingTitle';

type LandingRouteFactory = React.FC<{}> & {
  Error: typeof LandingError;
};

const Landing: LandingRouteFactory = ({}) => {
  return (
    <Page>
      <Hero title={<LandingTitle />} />
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Landing.Error = LandingError;
Landing.displayName = '@v2/Landing.Route';
export { Landing };
