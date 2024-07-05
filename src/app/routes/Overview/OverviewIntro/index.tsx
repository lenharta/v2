import * as React from 'react';
import { Page } from '@/app';

const OverviewIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Based in the United States, I am actively searching for roles within a team of talented engineers dedicated to driving innovation, promoting transformative thinking, and making impactful contributions to the industry."
        links={[
          {
            value: '/about',
            label: 'Learn More',
            variant: 'accent-tonal',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/contact',
            label: 'Contact Me',
            variant: 'accent-elevated',
            icon: { name: 'arrow-east' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { OverviewIntro };
