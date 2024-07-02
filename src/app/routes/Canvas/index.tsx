import * as React from 'react';
import { Page } from '@/app';
import { CanvasHero } from './CanvasHero';

type CanvasFactory = React.FC<{}> & {
  Hero: typeof CanvasHero;
};

const Canvas: CanvasFactory = ({}) => (
  <Page>
    <Canvas.Hero />
  </Page>
);

Canvas.Hero = CanvasHero;
Canvas.displayName = '@v2/Canvas.Route';
export { Canvas };
