import { Store } from '@/types';
import { CanvasDisplayState } from '../sandbox-canvas';

export type SandboxDisplayViewerProps = {
  store: Store.State;
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export type SandboxDisplayViewerComponent = {
  (props: SandboxDisplayViewerProps): React.ReactNode;
  displayName?: string;
};

export const SandboxDisplayViewer = (props: SandboxDisplayViewerProps) => {
  const { display } = props;

  const attributes = {
    'data-prefers-dir': display.state.dir,
    'data-prefers-color-mode': display.state.mode,
    'data-prefers-color-accent': display.state.accent,
  };

  return (
    <div className="v2-sandbox-canvas-display-viewer" {...attributes}>
      <div></div>
    </div>
  );
};
