import * as React from 'react';
import { RouteIntro } from '@/app/routes';

const OverviewIntro: React.FC<{}> = ({}) => {
  return (
    <RouteIntro
      banner="Based in the United States, I'm seeking a position within a team of skilled engineers committed to pioneering innovation, transformative thinking, and making significant contributions to the industry."
      links={[
        {
          value: '/about',
          label: 'Learn More',
          variant: 'accent-elevated',
        },
        {
          value: '/contact',
          label: 'Contact Me',
          variant: 'accent-text',
          icon: { name: 'arrow-east' },
        },
      ]}
    />
  );
};

export { OverviewIntro };
