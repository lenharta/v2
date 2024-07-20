import * as React from 'react';
import { Control } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoControlHero: React.FC<{}> = ({}) => <DemoHero title="Control" />;

const DemoControlIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="A versatile component for selectable options, similar to a content switcher. It allows users to switch between different views or modes, enhancing navigation and usability within the application."
      links={[
        {
          value: '/demo/button',
          label: 'Button',
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

const DemoControlCanvas: React.FC<{}> = ({}) => (
  <Page.Section>
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
        { type: 'toggle', prop: 'readOnly', initialValue: false },
        { type: 'toggle', prop: 'disabled', initialValue: false },
      ]}
    >
      <Control
        defaultValue="option-1"
        items={[
          { value: 'option-1', label: 'Segment 1' },
          { value: 'option-2', label: 'Segment 2' },
          { value: 'option-3', label: 'Segment 3' },
        ]}
      />
    </Canvas>
  </Page.Section>
);

type DemoControlFactory = React.FC<{}> & {
  Hero: typeof DemoControlHero;
  Intro: typeof DemoControlIntro;
  Canvas: typeof DemoControlCanvas;
};

const DemoControl: DemoControlFactory = ({}) => (
  <React.Fragment>
    <DemoControl.Hero />
    <DemoControl.Intro />
    <DemoControl.Canvas />
  </React.Fragment>
);

DemoControl.Hero = DemoControlHero;
DemoControl.Intro = DemoControlIntro;
DemoControl.Canvas = DemoControlCanvas;
DemoControl.displayName = '@v2/Demo.Control';
export { DemoControl };
