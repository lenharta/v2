import * as React from 'react';
import { Page } from '@/app';

const ArticlesIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Explore insightful articles covering front-end development trends, tips, and best practices. Gain valuable insights into modern web technologies and stay updated with industry news and innovations."
        links={[
          {
            value: '/contact',
            label: 'Contact Me',
            variant: 'accent-tonal',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/elements',
            label: 'Elements',
            variant: 'accent-elevated',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { ArticlesIntro };
