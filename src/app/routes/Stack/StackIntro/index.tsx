import * as React from 'react';
import { RouteIntro } from '@/app/routes';

const StackIntro: React.FC<{}> = ({}) => {
  return (
    <RouteIntro
      banner="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!"
      links={[
        {
          value: '/elements',
          label: 'Elements',
          variant: 'accent-elevated',
        },
        {
          value: '/projects',
          label: 'Projects',
          variant: 'accent-text',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  );
};

export { StackIntro };
