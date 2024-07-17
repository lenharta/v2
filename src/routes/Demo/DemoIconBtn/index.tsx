import * as React from 'react';
import { IconBtn } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas } from '@app';

type DemoIconBtnFactory = React.FC<{}> & {
  Canvas: React.FC<{}>;
};

const DemoIconBtnCanvas: DemoIconBtnFactory['Canvas'] = (props) => {
  const {} = props;
  return (
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

        { type: 'toggle', prop: 'selected', initialValue: false },
        { type: 'toggle', prop: 'readOnly', initialValue: false },
        { type: 'toggle', prop: 'disabled', initialValue: false },
      ]}
    >
      <IconBtn />
    </Canvas>
  );
};

const DemoIconBtn: DemoIconBtnFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Demo | IconBtn" />
      <DemoIconBtn.Canvas />
    </React.Fragment>
  );
};

DemoIconBtn.Canvas = DemoIconBtnCanvas;
DemoIconBtn.displayName = '@v2/Demo.IconBtn';
export { DemoIconBtn };
