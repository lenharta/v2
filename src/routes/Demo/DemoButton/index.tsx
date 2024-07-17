import * as React from 'react';
import { Button } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas } from '@app';

type DemoButtonFactory = React.FC<{}> & {
  Canvas: React.FC<{}>;
};

const DemoButtonCanvas: DemoButtonFactory['Canvas'] = (props) => {
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
      <Button>Button</Button>
    </Canvas>
  );
};

const DemoButton: DemoButtonFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Demo | Button" />
      <DemoButton.Canvas />
    </React.Fragment>
  );
};

DemoButton.Canvas = DemoButtonCanvas;
DemoButton.displayName = '@v2/Demo.Button';
export { DemoButton };
