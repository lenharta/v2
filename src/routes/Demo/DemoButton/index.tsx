import * as React from 'react';
import { Button } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoButtonIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="A standard button designed for general use across the application. It supports various styles and states, including default, primary, secondary, and disabled, ensuring consistent user interaction."
      links={[
        {
          value: '/demo/action',
          label: 'Action',
          variant: 'elevated-accent-tonal',
          icon: { name: 'arrow-northeast' },
        },
        {
          value: '/demo',
          label: 'Go Back',
          variant: 'elevated-accent',
          icon: { name: 'arrow-west' },
        },
      ]}
    />
  </Page.Section>
);

const DemoButtonCanvas: React.FC<{}> = ({}) => (
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
          initialValue: 'elevated-accent-tonal',
          data: [
            { label: 'default', value: 'default' },
            { label: 'elevated', value: 'elevated' },
            { label: 'default-accent', value: 'default-accent' },
            { label: 'elevated-accent', value: 'elevated-accent' },
            { label: 'default-accent-tonal', value: 'default-accent-tonal' },
            { label: 'elevated-accent-tonal', value: 'elevated-accent-tonal' },
          ],
        },
        {
          type: 'segmented',
          prop: 'align',
          initialValue: 'center',
          data: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End', value: 'end' },
          ],
        },
        {
          type: 'segmented',
          prop: 'justify',
          initialValue: 'center',
          data: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End', value: 'end' },
          ],
        },
        { type: 'toggle', prop: 'fullWidth', initialValue: false },
        { type: 'toggle', prop: 'selected', initialValue: false },
        { type: 'toggle', prop: 'readOnly', initialValue: false },
        { type: 'toggle', prop: 'disabled', initialValue: false },
      ]}
    >
      <Button>Button</Button>
    </Canvas>
  </Page.Section>
);

type DemoButtonFactory = React.FC<{}> & {
  Intro: typeof DemoButtonIntro;
  Canvas: typeof DemoButtonCanvas;
};

const DemoButton: DemoButtonFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Button" />
      <DemoButton.Intro />
      <DemoButton.Canvas />
    </React.Fragment>
  );
};

DemoButton.Intro = DemoButtonIntro;
DemoButton.Canvas = DemoButtonCanvas;
DemoButton.displayName = '@v2/Demo.Button';
export { DemoButton };
