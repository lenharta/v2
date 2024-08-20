import * as React from 'react';
import { Page } from '@app/components';

const OverviewIntro: React.FC<{}> & {} = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Web developer based in the United States, actively seeking a role within a team of talented engineers that drive innovation, promote transformative thinking, and make impactful contributions to the industry."
        links={[
          {
            value: `/about`,
            label: `Learn More`,
            variant: `tonal-default`,
            icon: { name: `arrow-northeast` },
          },
          {
            value: `/contact`,
            label: `Contact Me `,
            variant: `tonal-default`,
            icon: { name: `arrow-east` },
          },
        ]}
      />
    </Page.Section>
  );
};

OverviewIntro.displayName = '@v2/Overview.Intro';
export { OverviewIntro };
