import * as React from 'react';
import { Page } from '@app/components';
import { ProjectsHero } from './ProjectsHero';
import { ProjectsIntro } from './ProjectsIntro';

type ProjectsFactory = React.FC<{}> & {
  Hero: typeof ProjectsHero;
  Intro: typeof ProjectsIntro;
};

const Projects: ProjectsFactory = ({}) => (
  <Page>
    <Projects.Hero />
    <Projects.Intro />
  </Page>
);

Projects.Hero = ProjectsHero;
Projects.Intro = ProjectsIntro;
Projects.displayName = '@v2/Projects.Route';
export { Projects };
