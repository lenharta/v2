import * as React from 'react';
import { Page } from '@/app';
import { ElementsHero } from './ElementsHero';
import { ElementsIntro } from './ElementsIntro';

type ElementsFactory = React.FC<{}> & {
  Hero: typeof ElementsHero;
  Intro: typeof ElementsIntro;
};

const Elements: ElementsFactory = ({}) => (
  <Page>
    <Elements.Hero />
    <Elements.Intro />
  </Page>
);

Elements.Hero = ElementsHero;
Elements.Intro = ElementsIntro;
Elements.displayName = '@v2/Elements.Route';
export { Elements };
