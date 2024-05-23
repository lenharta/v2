import { Checkbox } from '@/core';

interface DemoCheckboxProps {}

const DemoCheckbox = (props: DemoCheckboxProps) => <Checkbox label="Checkbox Label" {...props} />;

interface DemoCheckboxGroupProps {}

const DemoCheckboxGroup = (props: DemoCheckboxGroupProps) => (
  <Checkbox.Group group="cbx-group-a" {...props}>
    <Checkbox label="Option 1a" />
    <Checkbox label="Option 2a" />
    <Checkbox label="Option 3a" />
    <Checkbox label="Option 4a" />
  </Checkbox.Group>
);

export { DemoCheckbox, DemoCheckboxGroup };
