import * as React from 'react';
import { Store } from '@/types';
import { Section, useStore } from '@/app';
import { SandboxDisplay } from '../sandbox-display';

export type SandboxCanvasProps = {};

export type SandboxCanvasComponent = {
  (props: SandboxCanvasProps): React.ReactNode;
  displayName?: string;
  Display: typeof SandboxDisplay;
};

export type CanvasDisplayComponent = 'button' | 'button-group' | 'action' | 'action-group';

export type CanvasDisplayState = {
  dir: Store.State['dir'];
  mode: Store.State['mode'];
  accent: Store.State['accent'];
  component: CanvasDisplayComponent;
};

export const useCanvasDisplay = (store: Store.State) => {
  const [state, dispatch] = React.useState<CanvasDisplayState>({
    component: 'button',
    accent: store.accent,
    mode: store.mode,
    dir: store.dir,
  });

  const setState = (payload: Partial<CanvasDisplayState>) => {
    dispatch((current) => ({ ...current, ...payload }));
  };

  return { state, setState };
};

export const SandboxCanvas: SandboxCanvasComponent = ({}) => {
  const store = useStore();
  const display = useCanvasDisplay(store);

  return (
    <Section className="v2-sandbox-canvas">
      <SandboxCanvas.Display store={store} display={display} />
    </Section>
  );
};

SandboxCanvas.Display = SandboxDisplay;
