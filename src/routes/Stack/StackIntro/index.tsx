import * as React from 'react';
import { Page } from '@app/components';

const StackIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Explore the core technologies and tools I utilize to craft scalable, responsive web applications. From JavaScript frameworks to CSS preprocessors, see the foundation of my front-end development skills."
        links={[
          {
            value: '/demo',
            label: 'Demo',
            variant: 'elevated-accent',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/projects',
            label: 'Projects',
            variant: 'elevated-accent',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { StackIntro };
