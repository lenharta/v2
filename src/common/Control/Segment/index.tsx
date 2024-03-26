import { ItemObjParsed } from '@/common/utils';
import { createEventCallback } from '@/utils';

export interface ControlSegmentProps {
  value: string;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  isActive?: boolean;
  item: ItemObjParsed;
}

export const ControlSegment = (props: ControlSegmentProps) => {
  const { item, onChange, style, isActive, ...otherProps } = props;

  if (!item.value) return null;

  const handleClick = createEventCallback(otherProps.onClick, () => onChange(item.label));

  return (
    <button
      className="Control-segment"
      onClick={handleClick}
      disabled={item?.disabled}
      data-activated={isActive}
      data-disabled={item?.disabled}
      aria-disabled={item?.disabled}
      aria-label={item.label}
      children={item.label}
      style={style}
    />
  );
};

ControlSegment.displayName = '@v2/Control.Segment';
