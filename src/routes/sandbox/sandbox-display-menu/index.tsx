import { Store } from '@/types';
import { Action } from '@/core';
import { CanvasDisplayState } from '../sandbox-canvas';
import { SandboxDisplayDir } from '../sandbox-display-dir';
import { SandboxDisplayMode } from '../sandbox-display-mode';
import { SandboxDisplayColor } from '../sandbox-display-color';
import { SandboxDisplaySelect } from '../sandbox-display-select';

export type SandboxDisplayMenuProps = {
  store: Store.State;
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export const SandboxDisplayMenu = (props: SandboxDisplayMenuProps) => {
  const { display, store } = props;
  return (
    <div className="v2-sandbox-canvas-display-menu">
      <Action.Group gap="xxs">
        <SandboxDisplayColor display={display} store={store} />
        <SandboxDisplayMode display={display} store={store} />
        <SandboxDisplayDir display={display} />
        <SandboxDisplaySelect display={display} />
        <Action.Spacer grow />
      </Action.Group>
    </div>
  );
};
