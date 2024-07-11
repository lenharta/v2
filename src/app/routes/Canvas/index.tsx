import * as React from 'react';
import { Page } from '@/app';

import { CanvasHero } from './CanvasHero';
import { CanvasTabs } from './CanvasTabs';
import { CanvasTable } from './CanvasTable';
import { CanvasButton } from './CanvasButton';
import { CanvasAction } from './CanvasAction';
import { CanvasControl } from './CanvasControl';
import { CanvasAccordion } from './CanvasAccordion';
import { CanvasDivider } from './CanvasDivider';
import { CanvasColors } from './CanvasColors';
import { CanvasSelect } from './CanvasSelect';
import { CanvasSnippet } from './CanvasSnippet';

type CanvasFactory = React.FC<{}> & {
  Hero: typeof CanvasHero;
  Tabs: typeof CanvasTabs;
  Table: typeof CanvasTable;
  Action: typeof CanvasAction;
  Button: typeof CanvasButton;
  Select: typeof CanvasSelect;
  Colors: typeof CanvasColors;
  Divider: typeof CanvasDivider;
  Control: typeof CanvasControl;
  Snippet: typeof CanvasSnippet;
  Accordion: typeof CanvasAccordion;
};

const Canvas: CanvasFactory = ({}) => (
  <Page>
    <Canvas.Hero />
    <Canvas.Snippet />
    <Canvas.Tabs />
    <Canvas.Table />
    <Canvas.Select />
    <Canvas.Action />
    <Canvas.Button />
    <Canvas.Divider />
    <Canvas.Control />
    <Canvas.Accordion />
    <Canvas.Colors />
  </Page>
);

Canvas.Hero = CanvasHero;
Canvas.Tabs = CanvasTabs;
Canvas.Table = CanvasTable;
Canvas.Select = CanvasSelect;
Canvas.Snippet = CanvasSnippet;
Canvas.Action = CanvasAction;
Canvas.Button = CanvasButton;
Canvas.Colors = CanvasColors;
Canvas.Divider = CanvasDivider;
Canvas.Control = CanvasControl;
Canvas.Accordion = CanvasAccordion;
Canvas.displayName = '@v2/Canvas.Route';
export { Canvas };
