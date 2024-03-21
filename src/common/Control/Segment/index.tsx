import { mergeProps } from '@/utils';

export interface ControlSegmentProps<T extends string> {
  value?: T;
  style?: React.CSSProperties;
  onChange(value: T): void;
  isActive?: boolean;
  item: {
    value: T;
    label?: string;
    disabled?: boolean;
  };
}

export const ControlSegment = <T extends string>(props: ControlSegmentProps<T>) => {
  const defaultProps: Partial<ControlSegmentProps<T>> = {};

  const { item, onChange, style, isActive } = mergeProps(defaultProps, props);

  if (!item.value) return null;

  return (
    <button
      className="Control-segment"
      onClick={() => onChange(item.value)}
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
