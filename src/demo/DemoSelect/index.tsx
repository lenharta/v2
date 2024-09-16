import * as React from 'react';
import { DEMO } from '@/types';
import { Divider, Select } from '@/core';

function parseSelectData(data: (string | DEMO.ControlSelectItem)[]): DEMO.ControlSelectItem[] {
  return data.map((item) => {
    return typeof item === 'string'
      ? { label: item, value: item }
      : { value: item.value, label: item.label };
  });
}

export const DemoSelect: React.FC<DEMO.ControlSelectProps> = (props) => {
  const { data, onChange, prop, value } = props;
  const [isOpen, onOpenChange] = React.useState(false);

  const handleChange = (value: string | undefined = '') => {
    onChange(value);
  };

  return (
    <div className="v2-demo-select">
      <Divider label={prop} />
      <Select
        data={parseSelectData(data)}
        onOpenChange={onOpenChange}
        onChange={handleChange}
        isOpen={isOpen}
        value={value}
        size="xs"
      />
    </div>
  );
};

DemoSelect.displayName = '@v2/Canvas.Control.Select';
