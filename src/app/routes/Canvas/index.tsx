import * as React from 'react';
import { Page } from '@/app';

import { CanvasHero } from './CanvasHero';
import { CanvasTabs } from './CanvasTabs';
import { CanvasTable } from './CanvasTable';
import { CanvasButton } from './CanvasButton';
import { CanvasAction } from './CanvasAction';
import { CanvasControl } from './CanvasControl';
import { CanvasAccordion } from './CanvasAccordion';

type CanvasFactory = React.FC<{}> & {
  Hero: typeof CanvasHero;
  Tabs: typeof CanvasTabs;
  Table: typeof CanvasTable;
  Action: typeof CanvasAction;
  Button: typeof CanvasButton;
  Control: typeof CanvasControl;
  Accordion: typeof CanvasAccordion;
};

const Canvas: CanvasFactory = ({}) => (
  <Page>
    <Canvas.Hero />
    <Canvas.Tabs />
    <Canvas.Table />
    <Canvas.Action />
    <Canvas.Button />
    <Canvas.Control />
    <Canvas.Accordion />
  </Page>
);

Canvas.Hero = CanvasHero;
Canvas.Tabs = CanvasTabs;
Canvas.Table = CanvasTable;
Canvas.Action = CanvasAction;
Canvas.Button = CanvasButton;
Canvas.Control = CanvasControl;
Canvas.Accordion = CanvasAccordion;
Canvas.displayName = '@v2/Canvas.Route';
export { Canvas };
