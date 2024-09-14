import * as React from 'react';
import { Store } from '@/types';
import { Action } from '@/core';
import { CanvasDisplayState } from '../sandbox-canvas';

export type SandboxDisplayDirProps = {
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export type SandboxDisplayDirComponent = {
  (props: SandboxDisplayDirProps): React.ReactNode;
  displayName?: string;
};

export const SandboxDisplayDir: SandboxDisplayDirComponent = (props) => {
  const { display } = props;
  const dirs: Store.State['dir'][] = ['ltr', 'rtl'];

  return (
    <React.Fragment>
      {dirs.map((dir) => (
        <Action
          icon={{ name: dir === 'ltr' ? 'text-left' : 'text-right' }}
          isSelected={dir === display.state.dir}
          onClick={() => display.setState({ dir })}
        />
      ))}
    </React.Fragment>
  );
};
