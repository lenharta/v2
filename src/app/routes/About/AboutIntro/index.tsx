import * as React from 'react';
import { Page } from '@/app';

const AboutIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Specializing in building large-scale component libraries, I've had the opportunity to work with Fortune 500 financial corporations, global real estate development firms, and award-winning creative marketing agencies."
        links={[
          {
            value: '/projects',
            label: 'Projects',
            variant: 'accent-tonal',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/',
            label: 'Overview',
            variant: 'accent-elevated',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { AboutIntro };

// Specializing in building large-scale component libraries that
// drive seamless user experiences across diverse industries. I have had
// the opportunity to work with Fortune 500 financial corporations, global
// real estate development firms, and award-winning creative marketing agencies,
// where I have delivered high-quality, scalable solutions.
