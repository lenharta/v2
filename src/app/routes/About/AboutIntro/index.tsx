import * as React from 'react';
import { RouteIntro } from '@/app/routes';

const AboutIntro: React.FC<{}> = ({}) => {
  return (
    <RouteIntro
      banner="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!"
      links={[
        {
          value: '/projects',
          label: 'Projects',
          variant: 'accent-elevated',
        },
        {
          value: '/',
          label: 'Overview',
          variant: 'accent-text',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  );
};

export { AboutIntro };
