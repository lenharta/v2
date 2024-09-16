import * as React from 'react';
import { DEMO } from '@/types';
import { Action, DURATION, EASING, Floating } from '@/core';

import { DemoSwitch } from '../DemoSwitch';
import { DemoSelect } from '../DemoSelect';
import { DemoCheckbox } from '../DemoCheckbox';
import { useDemoContext } from '../Demo.context';

export type DemoControlsProps = {
  controls: DEMO.ControlOptions[];
};

const CanvasComponents = {
  select: DemoSelect,
  switch: DemoSwitch,
  checkbox: DemoCheckbox,
};

export const DemoControls: React.FC<DemoControlsProps> = ({ controls }) => {
  const { display, settings } = useDemoContext();
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
      isOpen={isOpen}
      onChange={setOpen}
      placement="bottom-end"
      offset={{ mainAxis: 2 }}
      transitionProps={{
        mounted: isOpen,
        duration: DURATION['moderate-01'],
        timingFunction: EASING['expressive'],
        keepMounted: true,
        transition: {
          transitionProperty: 'transform, opacity',
          common: { transformOrigin: display.state.dir === 'ltr' ? 'right' : 'left' },
          out: { transform: 'translateX(100%)', opacity: 0 },
          in: { transform: 'translateX(0)', opacity: 1 },
        },
      }}
    >
      <Floating.Target>
        <Action
          isSelected={isOpen}
          icon={{ name: isOpen ? 'close-x-lg' : 'gear' }}
          className="v2-demo-controls-target"
        />
      </Floating.Target>
      <Floating.Box>
        <div className="v2-demo-controls-layout">{items}</div>
      </Floating.Box>
    </Floating>
  );
};
