import * as React from 'react';
import { CanvasProps } from './types';
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
        <div className="v2-canvas-display">
          <React.Fragment>{React.cloneElement(children as JSX.Element, state)}</React.Fragment>
        </div>
        <div className="v2-canvas-controls">{items}</div>
      </div>
    </div>
  );
}

export { Canvas };
