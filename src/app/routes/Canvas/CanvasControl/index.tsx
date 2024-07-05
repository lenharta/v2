import { Control, ControlProps } from '@/core';
import * as React from 'react';

const canvasData: ControlProps['items'] = [
  {
    value: 'option-1',
    label: 'Option 1',
    icon: { name: 'check-circle' },
  },
  {
    value: 'option-2',
    label: 'Option 2',
    icon: { name: 'check-circle' },
  },
  {
    value: 'option-3',
    label: 'Option 3',
    icon: { name: 'check-circle' },
  },
];

const CanvasControlDefault: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState('option-1');

  return (
    <div className="v2-canvas-control-default">
      <Control value={value} onItemChange={setValue} variant="base-default" items={canvasData} />
      <Control value={value} onItemChange={setValue} variant="base-elevated" items={canvasData} />
      <Control value={value} onItemChange={setValue} variant="accent-default" items={canvasData} />
      <Control value={value} onItemChange={setValue} variant="accent-elevated" items={canvasData} />
      <Control value={value} onItemChange={setValue} variant="accent-tonal" items={canvasData} />
      <Control value={value} onItemChange={setValue} variant="accent-ghost" items={canvasData} />
    </div>
  );
};

const CanvasControl: React.FC<{}> & {
  Default: typeof CanvasControlDefault;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasControl.Default />
    </React.Fragment>
  );
};

CanvasControl.Default = CanvasControlDefault;
CanvasControl.displayName = '@v2/Canvas.Control';
export { CanvasControl };
