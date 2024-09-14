import * as React from 'react';
import { Select } from '@/core';
import { CanvasDisplayState } from '../sandbox-canvas';

export type SandboxDisplaySelectProps = {
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export const SandboxDisplaySelect = (props: SandboxDisplaySelectProps) => {
  const { display } = props;
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Select
      isOpen={isOpen}
      placeholder="Select Component"
      onOpenChange={setOpen}
      onChange={(value) => display.setState({ component: (value || 'button') as any })}
      value={display.state.component}
      data={[
        { label: 'Button', value: 'button' },
        { label: 'Button.Group', value: 'button-group' },
        { label: 'Action', value: 'action' },
        { label: 'Action.Group', value: 'action-group' },
      ]}
    />
  );
};
