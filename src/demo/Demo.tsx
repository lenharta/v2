import * as React from 'react';
import { DEMO } from '@/types';
import { useStore } from '@/app';
import { DemoProvider } from './Demo.context';
import { DemoToolbar } from './DemoToolbar';
import { DemoCanvas } from './DemoCanvas';

type DemoProps = {
  children: React.ReactNode;
  controls: DEMO.ControlOptions[];
  containerStyle?: React.CSSProperties;
};

export const Demo = (props: DemoProps) => {
  const { children, controls, containerStyle } = props;

  const initialState = controls.reduce<Record<string, any>>((acc, control) => {
    acc[control.prop] = control.initialValue;
    return acc;
  }, {});

  const store = useStore();
  const [settings, setSettings] = React.useState(initialState);
  const [display, setDisplay] = React.useState<DEMO.State>({
    accent: store.accent,
    icons: store.icons,
    mode: store.mode,
    dir: store.dir,
  });

  const dispatchDisplay = (payload: Partial<DEMO.State>) => {
    setDisplay((current) => ({ ...current, ...payload }));
  };

  const dispatchSettings = (field: string, value: any) => {
    setSettings((current) => ({ ...current, [field]: value }));
  };

  return (
    <DemoProvider
      value={{
        display: { state: display, dispatch: dispatchDisplay },
        settings: { state: settings, dispatch: dispatchSettings },
      }}
    >
      <div className="v2-demo">
        <DemoToolbar controls={controls} />
        <DemoCanvas containerStyle={containerStyle}>{children}</DemoCanvas>
      </div>
    </DemoProvider>
  );
};
