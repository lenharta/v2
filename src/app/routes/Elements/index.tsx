import * as React from 'react';
import { Page } from '@/app';
import { ElementsHero } from './ElementsHero';

type ElementsFactory = React.FC<{}> & {
  Hero: typeof ElementsHero;
};

const Elements: ElementsFactory = ({}) => (
  <Page>
    <Elements.Hero />
  </Page>
);

Elements.Hero = ElementsHero;
Elements.displayName = '@v2/Elements.Route';
export { Elements };
