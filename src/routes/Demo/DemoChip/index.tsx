import * as React from 'react';
import { Chip } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, CanvasControlOptions, Page } from '@app';

const DemoChipHero: React.FC<{}> = ({}) => <DemoHero title="Chip" />;

const DemoChipIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="Insert Chip description."
      links={[
        {
          value: '/demo/tool-btn',
          label: 'Tool Button',
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

const CANVAS_CONTROL_OPTIONS_THEME_SIZE_REGULAR: CanvasControlOptions = {
  prop: 'size',
  type: 'select',
  initialValue: 'sm',
  data: [
    { label: 'XS', value: 'xs' },
    { label: 'SM', value: 'sm' },
    { label: 'MD', value: 'md' },
    { label: 'LG', value: 'lg' },
    { label: 'XL', value: 'xl' },
  ],
};

const CANVAS_CONTROL_OPTIONS_THEME_VARIANT: CanvasControlOptions = {
  prop: 'variant',
  type: 'select',
  initialValue: 'elevated-accent-tonal',
  data: [
    { label: 'default', value: 'default' },
    { label: 'elevated', value: 'elevated' },
    { label: 'default-accent', value: 'default-accent' },
    { label: 'elevated-accent', value: 'elevated-accent' },
    { label: 'default-accent-tonal', value: 'default-accent-tonal' },
    { label: 'elevated-accent-tonal', value: 'elevated-accent-tonal' },
  ],
};

const CANVAS_CONTROL_OPTIONS_STATE_SELECTED: CanvasControlOptions = {
  type: 'toggle',
  prop: 'selected',
  initialValue: false,
};

const CANVAS_CONTROL_OPTIONS_STATE_READONLY: CanvasControlOptions = {
  type: 'toggle',
  prop: 'readOnly',
  initialValue: false,
};

const CANVAS_CONTROL_OPTIONS_STATE_DISABLED: CanvasControlOptions = {
  type: 'toggle',
  prop: 'disabled',
  initialValue: false,
};

const DemoChipCanvas: React.FC<{}> = ({}) => (
  <Page.Section>
    <Canvas
      controls={[
        CANVAS_CONTROL_OPTIONS_THEME_SIZE_REGULAR,
        CANVAS_CONTROL_OPTIONS_THEME_VARIANT,
        CANVAS_CONTROL_OPTIONS_STATE_SELECTED,
        CANVAS_CONTROL_OPTIONS_STATE_READONLY,
        CANVAS_CONTROL_OPTIONS_STATE_DISABLED,
      ]}
    >
      <Chip>Chip</Chip>
    </Canvas>
  </Page.Section>
);

type DemoChipFactory = React.FC<{}> & {
  Hero: typeof DemoChipHero;
  Intro: typeof DemoChipIntro;
  Canvas: typeof DemoChipCanvas;
};

const DemoChip: DemoChipFactory = ({}) => (
  <React.Fragment>
    <DemoChip.Hero />
    <DemoChip.Intro />
    <DemoChip.Canvas />
  </React.Fragment>
);

DemoChip.Hero = DemoChipHero;
DemoChip.Intro = DemoChipIntro;
DemoChip.Canvas = DemoChipCanvas;
DemoChip.displayName = '@v2/Demo.Chip';
export { DemoChip };
