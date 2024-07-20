import { Control, Divider } from '@core';
import { capitalizeString } from '@utils';
import {
  CanvasControlSegmentedData,
  CanvasControlSegmentedItem,
  CanvasControlSegmentedProps,
} from '../types';

function parseCanvasControlSegmentData(
  data: CanvasControlSegmentedData
): CanvasControlSegmentedItem[] {
  return data.map((item) => {
    return typeof item === 'string'
      ? { label: capitalizeString(item), value: item }
      : { value: item.value, label: item.label };
  });
}

function CanvasControlSegmented(props: CanvasControlSegmentedProps) {
  const { data, onChange, prop, value } = props;

  const handleChange = (value: string | undefined = '') => {
    onChange(value);
  };

  return (
    <div className="v2-canvas-segmented">
      <Divider label={capitalizeString(prop)} />
      <Control
        value={value}
        items={parseCanvasControlSegmentData(data)}
        onItemChange={handleChange}
        variant="elevated"
      />
    </div>
  );
}

CanvasControlSegmented.displayName = '@v2/Canvas.Control.Segmented';
export { CanvasControlSegmented };
