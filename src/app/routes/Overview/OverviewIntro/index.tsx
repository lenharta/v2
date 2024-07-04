import * as React from 'react';
import { Page } from '@/app';

const OverviewIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Based in the United States, I'm seeking a position within a team of skilled engineers committed to pioneering innovation, fostering transformative thinking, and making significant contributions to the industry."
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
