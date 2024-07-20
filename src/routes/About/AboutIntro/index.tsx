import * as React from 'react';
import { Page } from '@app/components';

const AboutIntro: React.FC<{}> & {} = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Specializing in building large-scale component libraries, I've had the opportunity to work with Fortune 500 financial corporations, global real estate development firms, and award-winning creative marketing agencies."
        links={[
          {
            value: '/projects',
            label: 'Projects',
            variant: 'elevated-accent-tonal',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/',
            label: 'Overview',
            variant: 'elevated-accent',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

AboutIntro.displayName = '@v2/About.Intro';
export { AboutIntro };
