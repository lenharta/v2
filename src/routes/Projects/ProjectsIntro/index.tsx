import * as React from 'react';
import { Page } from '@app/components';

const ProjectsIntro: React.FC<{}> & {} = ({}) => {
  return (
    <Page.Section>
      <Page.Intro
        text="Discover a collection of my front-end development projects, featuring diverse web applications and creative solutions. Each project showcases my technical skills, problem-solving abilities, and commitment to excellence."
        links={[
          {
            value: '/stack',
            label: 'Stack',
            variant: 'elevated-accent-tonal',
            icon: { name: 'arrow-northeast' },
          },
          {
            value: '/about',
            label: 'About',
            variant: 'elevated-accent',
            icon: { name: 'arrow-west' },
          },
        ]}
      />
    </Page.Section>
  );
};

export { ProjectsIntro };
