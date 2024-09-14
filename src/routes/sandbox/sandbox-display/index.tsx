import * as React from 'react';
import { Store } from '@/types';
import { CanvasDisplayState } from '../sandbox-canvas';
import { SandboxDisplayMenu } from '../sandbox-display-menu';
import { SandboxDisplayViewer } from '../sandbox-display-viewer';

export type SandboxDisplayProps = {
  store: Store.State;
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export type SandboxDisplayComponent = {
  (props: SandboxDisplayProps): React.ReactNode;
  Menu: typeof SandboxDisplayMenu;
  Viewer: typeof SandboxDisplayViewer;
};

export const SandboxDisplay: SandboxDisplayComponent = (props) => {
  const { store, display } = props;
  return (
    <div className="v2-sandbox-canvas-display">
      <SandboxDisplay.Menu store={store} display={display} />
    </div>
  );
};

SandboxDisplay.Menu = SandboxDisplayMenu;
SandboxDisplay.Viewer = SandboxDisplayViewer;
