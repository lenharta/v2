import * as React from 'react';
import { Checkbox } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoRadioIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="An interactive Radio that allows users to select or deselect options. It includes states for checked, unchecked, and indeterminate, providing clear visual feedback on selection status."
      links={[
        {
          value: '/demo/toggle',
          label: 'Toggle',
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

const DemoRadioCanvas: React.FC<{}> = ({}) => (
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
      { type: 'toggle', prop: 'mixed', initialValue: false },
      { type: 'toggle', prop: 'readOnly', initialValue: false },
      { type: 'toggle', prop: 'disabled', initialValue: false },
    ]}
  >
    <Checkbox label="Label" />
  </Canvas>
);

type DemoRadioFactory = React.FC<{}> & {
  Canvas: typeof DemoRadioCanvas;
  Intro: typeof DemoRadioIntro;
};

const DemoRadio: DemoRadioFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Radio" />
      <DemoRadio.Intro />
      <DemoRadio.Canvas />
    </React.Fragment>
  );
};

DemoRadio.Intro = DemoRadioIntro;
DemoRadio.Canvas = DemoRadioCanvas;
DemoRadio.displayName = '@v2/Demo.Radio';
export { DemoRadio };
