import * as React from 'react';
import { Action } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoActionIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="A user-interface shell button used for navigation and primary controls. It integrates seamlessly into the application's layout, providing intuitive access to key actions and features."
      links={[
        {
          value: '/demo/icon-btn',
          label: 'Icon Button',
          variant: 'elevated-accent-tonal',
          icon: { name: 'arrow-northeast' },
        },
        {
          value: '/demo',
          label: 'Back To Directory',
          variant: 'elevated-accent',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  </Page.Section>
);

const DemoActionCanvas: React.FC<{}> = ({}) => (
  <Canvas
    controls={[
      {
        type: 'select',
        prop: 'variant',
        initialValue: 'default',
        data: [
          { label: 'default', value: 'default' },
          { label: 'elevated', value: 'elevated' },
          { label: 'default-accent', value: 'default-accent' },
          { label: 'elevated-accent', value: 'elevated-accent' },
          { label: 'default-accent-tonal', value: 'default-accent-tonal' },
          { label: 'elevated-accent-tonal', value: 'elevated-accent-tonal' },
        ],
      },

      { type: 'toggle', prop: 'selected', initialValue: false },
      { type: 'toggle', prop: 'readOnly', initialValue: false },
      { type: 'toggle', prop: 'disabled', initialValue: false },
    ]}
  >
    <Action icon={{ name: 'search' }} />
  </Canvas>
);

type DemoActionFactory = React.FC<{}> & {
  Intro: typeof DemoActionIntro;
  Canvas: typeof DemoActionCanvas;
};

const DemoAction: DemoActionFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Action" />
      <DemoAction.Intro />
      <DemoAction.Canvas />
    </React.Fragment>
  );
};

DemoAction.Intro = DemoActionIntro;
DemoAction.Canvas = DemoActionCanvas;
DemoAction.displayName = '@v2/Demo.Action';
export { DemoAction };
