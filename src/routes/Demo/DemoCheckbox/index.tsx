import * as React from 'react';
import { Button, Checkbox } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas } from '@app';

type DemoCheckboxFactory = React.FC<{}> & {
  Canvas: React.FC<{}>;
};

const DemoCheckboxCanvas: DemoCheckboxFactory['Canvas'] = (props) => {
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
        { type: 'toggle', prop: 'checked', initialValue: false },
        { type: 'toggle', prop: 'mixed', initialValue: false },
        { type: 'toggle', prop: 'readOnly', initialValue: false },
        { type: 'toggle', prop: 'disabled', initialValue: false },
      ]}
    >
      <Checkbox label="Label" />
    </Canvas>
  );
};

const DemoCheckbox: DemoCheckboxFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Checkbox" />
      <DemoCheckbox.Canvas />
    </React.Fragment>
  );
};

DemoCheckbox.Canvas = DemoCheckboxCanvas;
DemoCheckbox.displayName = '@v2/Demo.Button';
export { DemoCheckbox };
