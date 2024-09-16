import { DEMO } from '@/types';
import { Checkbox } from '@/core';

export const DemoCheckbox = (props: DEMO.ControlCheckboxProps) => {
  const { prop, value, onChange } = props;
  return (
    <Checkbox
      label={prop}
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
    />
  );
};
