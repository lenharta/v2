import { DEMO } from '@/types';
import { Switch } from '@/core';

export const DemoSwitch = (props: DEMO.ControlSwitchProps) => {
  const { prop, value, onChange } = props;
  return (
    <Switch
      label={prop}
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      className="v2-demo-switch"
    />
  );
};
