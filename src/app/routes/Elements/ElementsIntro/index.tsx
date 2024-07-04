import * as React from 'react';
import { Page } from '@/app';

const ElementsIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!"
        links={[
          {
            value: '/articles',
            label: 'Articles',
            variant: 'accent-tonal',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/stack',
            label: 'Stack',
            variant: 'accent-elevated',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { ElementsIntro };
