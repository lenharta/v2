import * as React from 'react';
import { Page } from '@app';

const DemoIntro: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="This portfolio is built entirely with custom components, without relying on external libraries. I take pride in crafting highly reusable components that integrate seamlessly into any development or design system. Explore the ecosystem below!"
        links={[
          {
            value: '/articles',
            label: 'Articles',
            variant: 'elevated',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/stack',
            label: 'Stack',
            variant: 'elevated',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { DemoIntro };
