import * as React from 'react';
import { ToolBtn } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoToolBtnHero: React.FC<{}> = ({}) => <DemoHero title="Icon Button" />;

const DemoToolBtnIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="A compact, rounded button featuring only an icon. Ideal for minimalist designs, it provides quick access to functions without the need for descriptive text, maintaining a clean interface."
      links={[
        {
          value: '/demo/checkbox',
          label: 'Checkbox',
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

const DemoToolBtnCanvas: React.FC<{}> = ({}) => (
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
        { type: 'toggle', prop: 'selected', initialValue: false },
        { type: 'toggle', prop: 'readOnly', initialValue: false },
        { type: 'toggle', prop: 'disabled', initialValue: false },
      ]}
    >
      <ToolBtn icon={{ name: 'close-x-circle' }} />
    </Canvas>
  </Page.Section>
);

type DemoToolBtnFactory = React.FC<{}> & {
  Hero: typeof DemoToolBtnHero;
  Intro: typeof DemoToolBtnIntro;
  Canvas: typeof DemoToolBtnCanvas;
};

const DemoToolBtn: DemoToolBtnFactory = ({}) => (
  <React.Fragment>
    <DemoToolBtn.Hero />
    <DemoToolBtn.Intro />
    <DemoToolBtn.Canvas />
  </React.Fragment>
);

DemoToolBtn.Hero = DemoToolBtnHero;
DemoToolBtn.Intro = DemoToolBtnIntro;
DemoToolBtn.Canvas = DemoToolBtnCanvas;
DemoToolBtn.displayName = '@v2/Demo.ToolBtn';
export { DemoToolBtn };
