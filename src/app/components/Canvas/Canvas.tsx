import { useStore } from '@/app/store';
import { Core, Store } from '@/types';
import React from 'react';

const CanvasControlComponents: Record<Core.CanvasControl, React.ReactNode> = {
  color: <span></span>,
  select: <span></span>,
  switch: <span></span>,
  checkbox: <span></span>,
  segmented: <span></span>,
};

const getInitialDisplayState = (store: Store.State): Core.CanvasDisplayState => ({
  dir: store.dir,
  mode: store.mode,
  accent: store.accent,
});

export type CanvasControlsProps<T = Core.CanvasDisplayState> = {
  children: React.ReactNode;
  dispatchDisplayState: (prop: keyof T, value: any) => void;
  displayState: T;
};

const CanvasControls = (props: CanvasControlsProps) => {
  const { children } = props;
  return <div className="v2-canvas-controls">{children}</div>;
};

const Canvas = (props: Core.CanvasProps) => {
  const { children, controls } = props;

  const initialState = controls.reduce<Record<string, any>>((prev, control) => {
    prev[control.prop] = control.initialValue;
    return prev;
  }, {});

  const store = useStore();
  const [state, setState] = React.useState(initialState);
  const [displayState, setDisplayState] = React.useState(getInitialDisplayState(store));

  const dispatchState = (prop: string, value: any) => {
    setState((current) => ({ ...current, [prop]: value }));
  };

  const dispatchDisplayState = (prop: keyof Core.CanvasDisplayState, value: any) => {
    setDisplayState((current) => ({ ...current, [prop]: value }));
  };

  const items = controls.map((control) => {
    const { initialValue, type, ...rest } = control;
    const ControlComponent = CanvasControlComponents[control.type] as any;

    return (
      <ControlComponent
        key={control.prop}
        value={state[control.prop]}
        onChange={(value: any) => dispatchState(control.prop, value)}
        {...rest}
      />
    );
  });

  return (
    <div className="v2-canvas">
      <div className="v2-canvas-layout"></div>
    </div>
  );
};
