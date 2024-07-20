import * as React from 'react';
import { CanvasDisplayState, CanvasProps } from './types';
import { CanvasDisplay } from './CanvasDisplay';
import { CanvasControls } from './CanvasControls';
import { CanvasControlToggle } from './CanvasControlToggle';
import { CanvasControlSelect } from './CanvasControlSelect';
import { CanvasControlSegmented } from './CanvasControlSegmented';
import { useStore } from '@app/store';
import { Store } from '@types';

const CanvasComponents = {
  toggle: CanvasControlToggle,
  select: CanvasControlSelect,
  segmented: CanvasControlSegmented,
};

const getInitialDisplayState = (store: Store.State): CanvasDisplayState => ({
  dir: store.dir,
  mode: store.mode,
  accent: store.accent,
  contrast: store.contrast,
});

function Canvas({ children, controls }: CanvasProps) {
  const initialState = controls.reduce<Record<string, any>>((acc, control) => {
    acc[control.prop] = control.initialValue;
    return acc;
  }, {});

  const store = useStore();
  const [state, dispatch] = React.useState(initialState);
  const [displayState, setDisplay] = React.useState<CanvasDisplayState>(
    getInitialDisplayState(store)
  );

  console.log(displayState);

  const setStateField = (field: string, value: any) => {
    dispatch((current) => ({ ...current, [field]: value }));
  };

  const setDisplayState = (prop: keyof CanvasDisplayState, value: any) => {
    setDisplay((current) => ({ ...current, [prop]: value }));
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
        <CanvasDisplay
          setDisplayState={setDisplayState}
          displayState={displayState}
          children={children}
          state={state}
        />

        <CanvasControls
          setDisplayState={setDisplayState}
          displayState={displayState}
          children={items}
        />
      </div>
    </div>
  );
}

export { Canvas };
