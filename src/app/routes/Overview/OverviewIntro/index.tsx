import { Page } from '@/app';
import { Text } from '@/core';
import * as React from 'react';

interface OverviewIntroProps {}

type OverviewIntroFactory = React.FC<OverviewIntroProps>;

const OverviewIntro: OverviewIntroFactory = (props) => {
  const {} = props;

  return (
    <Page.Section>
      <div className="v2-overview-intro-layout">
        <div className="v2-overview-intro-banner">
          <Text size="xxl">
            Based in the United States, I'm seeking a position within a team of skilled engineers
            committed to pioneering innovation, fostering transformative thinking, and making
            significant contributions to the industry.
          </Text>
        </div>
        <div className="v2-overview-intro-links">
          <Page.Link
            to="/about"
            label="About Me"
            variant="accent-elevated"
            icon={{ name: 'arrow-northeast' }}
          />
          <Page.Link
            to="/projects"
            label="See Projects"
            variant="accent-text"
            icon={{ name: 'arrow-northeast' }}
          />
        </div>
      </div>
    </Page.Section>
  );
};

export { OverviewIntro };

// TEMPLATE

// import { Page } from '@/app';
// import * as React from 'react';

// interface OverviewIntroProps {}

// type OverviewIntroFactory = React.FC<OverviewIntroProps>;

// const OverviewIntro: OverviewIntroFactory = (props) => {
//   const {} = props;
//   return (
//     <Page.Section>
//       <span>Intro</span>
//     </Page.Section>
//   );
// };

// export { OverviewIntro };
