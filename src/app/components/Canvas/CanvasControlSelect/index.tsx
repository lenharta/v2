import * as React from 'react';
import { Select } from '@core';
import { capitalizeString } from '@utils';
import {
  CanvasControlSelectData,
  CanvasControlSelectProps,
  CanvasControlSelectItem,
} from '../types';

function parseSelectData(data: CanvasControlSelectData): CanvasControlSelectItem[] {
  return data.map((item) => {
    return typeof item === 'string'
      ? { label: capitalizeString(item), value: item }
      : { value: item.value, label: item.label };
  });
}

const CanvasControlSelect: React.FC<CanvasControlSelectProps> = (props) => {
  const { data, onChange, prop, value } = props;
  const [isOpen, onOpenChange] = React.useState(false);

  const handleChange = (value: string | undefined = '') => {
    onChange(value);
  };

  return (
    <div className="v2-canvas-select">
      <Select
        data={parseSelectData(data)}
        value={value}
        isOpen={isOpen}
        label={capitalizeString(prop)}
        placeholder={capitalizeString(prop)}
        onOpenChange={onOpenChange}
        onChange={handleChange}
        variant="elevated"
      />
    </div>
  );
};

CanvasControlSelect.displayName = '@v2/Canvas.Control.Select';
export { CanvasControlSelect };
