import * as React from 'react';
import { RouteIntro } from '@/app/routes';

const ArticlesIntro: React.FC<{}> = ({}) => {
  return (
    <RouteIntro
      banner="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!"
      links={[
        {
          value: '/contact',
          label: 'Contact Me',
          variant: 'accent-elevated',
        },
        {
          value: '/elements',
          label: 'Elements',
          variant: 'accent-text',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  );
};

export { ArticlesIntro };
