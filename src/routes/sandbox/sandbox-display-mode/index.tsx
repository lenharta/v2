import * as React from 'react';
import { Store } from '@/types';
import { Action } from '@/core';
import { CanvasDisplayState } from '../sandbox-canvas';

export type SandboxDisplayModeProps = {
  store: Store.State;
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export const SandboxDisplayMode = ({ display, store }: SandboxDisplayModeProps) => {
  const modes: Store.State['mode'][] = ['light', 'dark', 'dim'];

  return (
    <React.Fragment>
      {modes.map((mode) => (
        <Action
          key={mode}
          icon={{ type: store.icons, name: `mode-${mode}` }}
          onClick={() => display.setState({ mode })}
          isSelected={mode === display.state.mode}
          aria-label="change theme mode color"
        />
      ))}
    </React.Fragment>
  );
};
