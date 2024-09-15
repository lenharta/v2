import * as React from 'react';
import { DEMO } from '@/types';
import { useStore } from '@/app';
import { DemoProvider } from './Demo.context';
import { DemoToolbar } from './DemoToolbar';
import { DemoCanvas } from './DemoCanvas';

type DemoProps = {
  children: React.ReactNode;
};

export const Demo = (props: DemoProps) => {
  const { children } = props;
  const store = useStore();

  const [state, setState] = React.useState<DEMO.State>({
    accent: store.accent,
    icons: store.icons,
    mode: store.mode,
    dir: store.dir,
  });

  const dispatch = (payload: Partial<DEMO.State>) => {
    setState((current) => ({ ...current, ...payload }));
  };

  return (
    <DemoProvider value={{ state, dispatch }}>
      <div className="v2-demo">
        <DemoToolbar />
        <DemoCanvas>{children}</DemoCanvas>
      </div>
    </DemoProvider>
  );
};
