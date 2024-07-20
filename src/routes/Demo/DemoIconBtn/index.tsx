import * as React from 'react';
import { IconBtn } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas, Page } from '@app';

const DemoIconBtnHero: React.FC<{}> = ({}) => <DemoHero title="Icon Button" />;

const DemoIconBtnIntro: React.FC<{}> = ({}) => (
  <Page.Section>
    <Page.Intro
      text="A compact, rounded button featuring only an icon. Ideal for minimalist designs, it provides quick access to functions without the need for descriptive text, maintaining a clean interface."
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

const DemoIconBtnCanvas: React.FC<{}> = ({}) => (
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
      <IconBtn icon={{ name: 'house-door' }} />
    </Canvas>
  </Page.Section>
);

type DemoIconBtnFactory = React.FC<{}> & {
  Hero: typeof DemoIconBtnHero;
  Intro: typeof DemoIconBtnIntro;
  Canvas: typeof DemoIconBtnCanvas;
};

const DemoIconBtn: DemoIconBtnFactory = ({}) => (
  <React.Fragment>
    <DemoIconBtn.Hero />
    <DemoIconBtn.Intro />
    <DemoIconBtn.Canvas />
  </React.Fragment>
);

DemoIconBtn.Hero = DemoIconBtnHero;
DemoIconBtn.Intro = DemoIconBtnIntro;
DemoIconBtn.Canvas = DemoIconBtnCanvas;
DemoIconBtn.displayName = '@v2/Demo.IconBtn';
export { DemoIconBtn };
