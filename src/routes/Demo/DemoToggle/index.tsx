import * as React from 'react';
import { Toggle } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoToggleIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="An interactive Toggle that allows users to select or deselect options. It includes states for checked, unchecked, and indeterminate, providing clear visual feedback on selection status."
      links={[
        {
          value: '/demo/control',
          label: 'Control',
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

const DemoToggleCanvas: React.FC<{}> = ({}) => (
  <Canvas
    controls={[
      {
        type: 'select',
        prop: 'size',
        initialValue: 'sm',
        data: [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
          { label: 'XL', value: 'xl' },
        ],
      },
      {
        type: 'select',
        prop: 'variant',
        initialValue: 'default',
        data: [
          { label: 'default', value: 'default' },
          { label: 'elevated', value: 'elevated' },
          { label: 'default-accent', value: 'default-accent' },
          { label: 'elevated-accent', value: 'elevated-accent' },
        ],
      },
      { type: 'toggle', prop: 'checked', initialValue: false },
      { type: 'toggle', prop: 'readOnly', initialValue: false },
      { type: 'toggle', prop: 'disabled', initialValue: false },
    ]}
  >
    <Toggle />
  </Canvas>
);

type DemoToggleFactory = React.FC<{}> & {
  Canvas: typeof DemoToggleCanvas;
  Intro: typeof DemoToggleIntro;
};

const DemoToggle: DemoToggleFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Toggle" />
      <DemoToggle.Intro />
      <DemoToggle.Canvas />
    </React.Fragment>
  );
};

DemoToggle.Intro = DemoToggleIntro;
DemoToggle.Canvas = DemoToggleCanvas;
DemoToggle.displayName = '@v2/Demo.Toggle';
export { DemoToggle };
