import * as React from 'react';
import { Checkbox } from '@/core';

const CanvasCheckboxDefault: React.FC<{}> = ({}) => {
  const [checked, setChecked] = React.useState(false);
  console.log(checked);
  return (
    <div className="v2-canvas-checkbox v2-canvas-checkbox-default">
      <Checkbox
        label="Single Option"
        onChange={(event) => setChecked(event.currentTarget.checked)}
        checked={checked}
      />
    </div>
  );
};

const CanvasCheckboxGroup: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState<string[]>([]);

  console.log(value);

  return (
    <div className="v2-canvas-checkbox v2-canvas-checkbox-group">
      <Checkbox.Group value={value} onChange={setValue}>
        <Checkbox value="option a" label="Group Option A" />
        <Checkbox value="option b" label="Group Option B" />
        <Checkbox value="option c" label="Group Option C" />
      </Checkbox.Group>
    </div>
  );
};

type CanvasCheckboxFactory = React.FC<{}> & {
  Group: typeof CanvasCheckboxGroup;
  Default: typeof CanvasCheckboxDefault;
};

const CanvasCheckbox: CanvasCheckboxFactory = ({}) => (
  <React.Fragment>
    <CanvasCheckbox.Default />
    <CanvasCheckbox.Group />
  </React.Fragment>
);

CanvasCheckbox.Group = CanvasCheckboxGroup;
CanvasCheckbox.Default = CanvasCheckboxDefault;
CanvasCheckbox.displayName = '@v2/Canvas.Checkbox';
export { CanvasCheckbox };
