import * as React from 'react';
import { RouteIntro } from '@/app/routes';

const ElementsIntro: React.FC<{}> = ({}) => {
  return (
    <RouteIntro
      banner="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!"
      links={[
        {
          value: '/articles',
          label: 'Articles',
          variant: 'accent-elevated',
        },
        {
          value: '/stack',
          label: 'Stack',
          variant: 'accent-text',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  );
};

export { ElementsIntro };
