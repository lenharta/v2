import * as React from 'react';
import { Page } from '@app';
import { AboutHero } from './AboutHero';
import { AboutIntro } from './AboutIntro';
import { AboutMindset, AboutResume } from './sections';

type AboutFactory = React.FC<{}> & {
  Hero: typeof AboutHero;
  Intro: typeof AboutIntro;
  Resume: typeof AboutResume;
  Mindset: typeof AboutMindset;
};

export const About: AboutFactory = ({}) => (
  <Page>
    <About.Hero />
    <About.Intro />
    <About.Resume order={1} id="resume" title="Resume" />
    <About.Mindset order={2} id="mindset" title="Mindset" />
  </Page>
);

About.Hero = AboutHero;
About.Intro = AboutIntro;
About.Resume = AboutResume;
About.Mindset = AboutMindset;
About.displayName = '@v2/Route.About';
