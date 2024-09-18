import * as React from 'react';
import { DEMO, Store } from '@/types';
import { Action, DURATION, EASING, Floating } from '@/core';

import { DemoSwitch } from '../DemoSwitch';
import { DemoSelect } from '../DemoSelect';
import { DemoControl } from '../DemoControl';
import { DemoCheckbox } from '../DemoCheckbox';
import { useDemoContext } from '../Demo.context';

export type DemoControlsProps = {
  controls: DEMO.ControlOptions[];
  store: Store.State;
};

const CanvasComponents = {
  select: DemoSelect,
  switch: DemoSwitch,
  checkbox: DemoCheckbox,
  segmented: DemoControl,
};

export const DemoControls: React.FC<DemoControlsProps> = ({ controls, store }) => {
  const { settings } = useDemoContext();
  const [isOpen, setOpen] = React.useState(false);

  const items = controls.map((control) => {
    const CanvasComponent = CanvasComponents[control.type] as any;
    const { initialValue, ...rest } = control;

    return (
      <CanvasComponent
        key={control.prop}
        value={settings.state[control.prop]}
        onChange={(value: any) => settings.dispatch(control.prop, value)}
        {...rest}
      />
    );
  });

  return (
    <Floating
      dir={store.dir}
      isOpen={isOpen}
      onChange={setOpen}
      placement={store.dir === 'ltr' ? 'bottom-end' : 'bottom-start'}
      offset={{ mainAxis: 2, crossAxis: 2 }}
      transitionProps={{
        mounted: isOpen,
        duration: DURATION['moderate-01'],
        timingFunction: EASING['expressive'],
        keepMounted: true,
        transition: {
          transitionProperty: 'transform, opacity',
          common: { transformOrigin: store.dir === 'ltr' ? 'right' : 'left' },
          out: {
            transform: store.dir === 'ltr' ? 'translateX(100%)' : 'translateX(-100%)',
            opacity: 0,
          },
          in: { transform: 'translateX(0)', opacity: 1 },
        },
      }}
    >
      <Floating.Target>
        <Action
          isSelected={isOpen}
          icon={{ name: isOpen ? 'close-x-lg' : 'sliders' }}
          className="v2-demo-controls-target"
        />
      </Floating.Target>
      <Floating.Box>
        <div className="v2-demo-controls-layout">{items}</div>
      </Floating.Box>
    </Floating>
  );
};
