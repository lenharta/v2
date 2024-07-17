import * as React from 'react';
import { CanvasProps } from './types';
import { CanvasDisplay } from './CanvasDisplay';
import { CanvasControls } from './CanvasControls';
import { CanvasControlToggle } from './CanvasControlToggle';
import { CanvasControlSelect } from './CanvasControlSelect';

const CanvasComponents = {
  toggle: CanvasControlToggle,
  select: CanvasControlSelect,
};

function Canvas({ children, controls }: CanvasProps) {
  const initialState = controls.reduce<Record<string, any>>((acc, control) => {
    acc[control.prop] = control.initialValue;
    return acc;
  }, {});

  const [state, dispatch] = React.useState(initialState);

  const setStateField = (field: string, value: any) => {
    dispatch((current) => ({ ...current, [field]: value }));
  };

  const items = controls.map((control) => {
    const CanvasComponent = CanvasComponents[control.type] as any;
    const { initialValue, ...rest } = control;

    return (
      <CanvasComponent
        key={control.prop}
        value={state[control.prop]}
        onChange={(value: any) => setStateField(control.prop, value)}
        {...rest}
      />
    );
  });

  return (
    <div className="v2-canvas">
      <div className="v2-canvas-layout">
        <CanvasDisplay children={children} state={state} />
        <CanvasControls>{items}</CanvasControls>
      </div>
    </div>
  );
}

export { Canvas };
