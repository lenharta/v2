export interface ControlIndicatorProps {
  style?: React.CSSProperties;
}

export const defaultProps: Partial<ControlIndicatorProps> = {};

export const ControlIndicator = ({ style }: ControlIndicatorProps) => {
  return <div className="control-indicator" style={style} />;
};

ControlIndicator.displayName = '@v2/Control.Indicator';
