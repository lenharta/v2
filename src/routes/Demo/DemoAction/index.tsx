import * as React from 'react';
import { Action } from '@core';
import { DemoHero } from '../DemoHero';
import { Canvas } from '@app';

type DemoActionFactory = React.FC<{}> & {
  Canvas: React.FC<{}>;
};

const DemoActionCanvas: DemoActionFactory['Canvas'] = (props) => {
  const {} = props;
  return (
    <Canvas
      controls={[
        {
          type: 'select',
          prop: 'variant',
          initialValue: 'default',
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
      <Action icon={{ name: 'search' }} />
    </Canvas>
  );
};

const DemoAction: DemoActionFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Action" />
      <DemoAction.Canvas />
    </React.Fragment>
  );
};

DemoAction.Canvas = DemoActionCanvas;
DemoAction.displayName = '@v2/Demo.Action';
export { DemoAction };
