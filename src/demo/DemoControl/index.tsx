import * as React from 'react';
import { DEMO } from '@/types';
import { Control, Divider } from '@/core';

function parseControlData(
  data: (string | DEMO.ControlSegmentedItem)[]
): DEMO.ControlSegmentedItem[] {
  return data.map((item) => {
    return typeof item === 'string'
      ? { label: item, value: item }
      : { value: item.value, label: item.label };
  });
}

export const DemoControl: React.FC<DEMO.ControlSegmentedProps> = (props) => {
  const { data, onChange, prop, value } = props;

  console.log(value, { onChange });

  return (
    <div className="v2-demo-select">
      <Divider label={prop} />
      <Control onChange={onChange} value={value} items={parseControlData(data)} size="xs" grow />
    </div>
  );
};

DemoControl.displayName = '@v2/Canvas.Control.Select';
