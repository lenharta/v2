import * as React from 'react';
import { Control } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas } from '@app';

type DemoControlFactory = React.FC<{}> & {
  Canvas: React.FC<{}>;
};

const DemoControlCanvas: DemoControlFactory['Canvas'] = (props) => {
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
  );
};

const DemoControl: DemoControlFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Control" />
      <DemoControl.Canvas />
    </React.Fragment>
  );
};

DemoControl.Canvas = DemoControlCanvas;
DemoControl.displayName = '@v2/Demo.Control';
export { DemoControl };
