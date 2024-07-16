import * as React from 'react';
import { ToolBtn } from '@/core';
import { DemoHero } from '../DemoHero';
import { Canvas } from '@/app';

type DemoToolBtnFactory = React.FC<{}> & {
  Canvas: React.FC<{}>;
};

const DemoToolBtnCanvas: DemoToolBtnFactory['Canvas'] = (props) => {
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
      <ToolBtn />
    </Canvas>
  );
};

const DemoToolBtn: DemoToolBtnFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Demo | ToolBtn" />
      <DemoToolBtn.Canvas />
    </React.Fragment>
  );
};

DemoToolBtn.Canvas = DemoToolBtnCanvas;
DemoToolBtn.displayName = '@v2/Demo.ToolBtn';
export { DemoToolBtn };
