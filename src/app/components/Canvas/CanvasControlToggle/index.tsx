import { Toggle } from '@/core';
import { CanvasControlToggleProps } from '../types';
import { capitalizeString } from '@/utils';

const CanvasControlToggle = (props: CanvasControlToggleProps) => {
  const { prop, value, onChange } = props;
  return (
    <Toggle
      label={capitalizeString(prop)}
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      size="md"
    />
  );
};

CanvasControlToggle.displayName = '@v2/Canvas.Control.Toggle';
export { CanvasControlToggle };
