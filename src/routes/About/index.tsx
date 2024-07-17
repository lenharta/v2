import * as React from 'react';
import { Page } from '@app';
import { AboutHero } from './AboutHero';
import { AboutIntro } from './AboutIntro';

type AboutFactory = React.FC<{}> & {
  Hero: typeof AboutHero;
  Intro: typeof AboutIntro;
};

const About: AboutFactory = ({}) => (
  <Page>
    <About.Hero />
    <About.Intro />
  </Page>
);

About.Hero = AboutHero;
About.Intro = AboutIntro;
About.displayName = '@v2/About.Route';
export { About };
