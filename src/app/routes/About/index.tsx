import * as React from 'react';
import { Page } from '@/app';
import { AboutHero } from './AboutHero';

type AboutFactory = React.FC<{}> & {
  Hero: typeof AboutHero;
};

const About: AboutFactory = ({}) => (
  <Page>
    <About.Hero />
  </Page>
);

About.Hero = AboutHero;
About.displayName = '@v2/About.Route';
export { About };
