import { Select } from '@/core';
import * as React from 'react';

const CanvasSelectDefault: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState<string>();
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <div className="v2-canvas-select-layout">
      <Select
        value={value}
        isOpen={isOpen}
        onChange={setValue}
        onOpenChange={setOpen}
        data={[
          {
            label: 'Item 1',
            value: 'item-1',
          },
          {
            label: 'Item 2',
            value: 'item-2',
          },
          {
            label: 'Item 3',
            value: 'item-3',
          },
          {
            label: 'Item 4',
            value: 'item-4',
          },
        ]}
      />
    </div>
  );
};

type CanvasSelectFactory = React.FC<{}> & {
  Default: typeof CanvasSelectDefault;
};

const CanvasSelect: CanvasSelectFactory = ({}) => {
  return (
    <div className="v2-canvas-select-container">
      <CanvasSelect.Default />
    </div>
  );
};

CanvasSelect.Default = CanvasSelectDefault;
CanvasSelect.displayName = '@v2/Canvas.Select';
export { CanvasSelect };
