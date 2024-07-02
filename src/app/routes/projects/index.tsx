import * as React from 'react';
import { Page } from '@/app';
import { ProjectsHero } from './ProjectsHero';

type ProjectsFactory = React.FC<{}> & {
  Hero: typeof ProjectsHero;
};

const Projects: ProjectsFactory = ({}) => (
  <Page>
    <Projects.Hero />
  </Page>
);

Projects.Hero = ProjectsHero;
Projects.displayName = '@v2/Projects.Route';
export { Projects };
