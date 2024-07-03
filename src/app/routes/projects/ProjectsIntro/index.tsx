import * as React from 'react';
import { RouteIntro } from '@/app/routes';

const ProjectsIntro: React.FC<{}> = ({}) => {
  return (
    <RouteIntro
      banner="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!"
      links={[
        {
          value: '/stack',
          label: 'Stack',
          variant: 'accent-elevated',
        },
        {
          value: '/about',
          label: 'About',
          variant: 'accent-text',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  );
};

export { ProjectsIntro };
