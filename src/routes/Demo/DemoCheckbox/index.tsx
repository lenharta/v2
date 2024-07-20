import * as React from 'react';
import { Checkbox } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoCheckboxIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="An interactive checkbox that allows users to select or deselect options. It includes states for checked, unchecked, and indeterminate, providing clear visual feedback on selection status."
      links={[
        {
          value: '/demo/radio',
          label: 'Radio',
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

const DemoCheckboxCanvas: React.FC<{}> = ({}) => (
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

type DemoCheckboxFactory = React.FC<{}> & {
  Canvas: typeof DemoCheckboxCanvas;
  Intro: typeof DemoCheckboxIntro;
};

const DemoCheckbox: DemoCheckboxFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Checkbox" />
      <DemoCheckbox.Intro />
      <DemoCheckbox.Canvas />
    </React.Fragment>
  );
};

DemoCheckbox.Intro = DemoCheckboxIntro;
DemoCheckbox.Canvas = DemoCheckboxCanvas;
DemoCheckbox.displayName = '@v2/Demo.Checkbox';
export { DemoCheckbox };
