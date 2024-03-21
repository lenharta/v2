import { mergeProps } from '@/utils';

export interface ControlIndicatorProps {
  style?: React.CSSProperties;
}

export const defaultProps: Partial<ControlIndicatorProps> = {};

export const ControlIndicator = (props: ControlIndicatorProps) => {
  const { style } = mergeProps(defaultProps, props);
  return <div className="control-indicator" style={style} />;
};

ControlIndicator.displayName = '@v2/Control.Indicator';
