import * as React from 'react';
import { ControlSegment } from './Segment';
import type { Core } from '@/types/core';
import type { Orientation, Size } from '@/types/common';
import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';

export type ControlOption = {
  value: string;
  label?: string;
  disabled?: boolean;
};

export type ControlData = string[] | ControlOption[];

export type ControlScheme = 'default' | 'accent';

export type ControlProps = {
  data?: ControlData;
  size?: Size;
  value: string;
  radius?: Size;
  scheme?: ControlScheme;
  disabled?: boolean;
  orientation?: Orientation;
  onValueChange: (value: string) => void;
};

export type ControlFactory = Core.RefFactory<{
  component: 'div';
  props: ControlProps;
  ref: HTMLDivElement;
}>;

const parseControlOption = (option: string | ControlOption) => {
  if (typeof option === 'string' || typeof option === 'number') {
    return {
      value: option,
      label: option,
    };
  }

  if (!('label' in option)) {
    return {
      label: option.value,
      value: option.value,
      disabled: option.disabled,
    };
  }

  return option;
};

const parseControlData = (data?: ControlData) => {
  if (!data) return [];
  return data.map((option) => parseControlOption(option));
};

const defaultProps: Partial<ControlProps> = {
  orientation: 'horizontal',
  scheme: 'default',
  radius: 'xs',
  size: 'sm',
};

export const Control: ControlFactory = React.forwardRef((props, ref) => {
  const {
    size,
    data,
    value,
    radius,
    scheme,
    children,
    disabled,
    orientation,
    onValueChange,
    component: Component = 'div',
    ...otherProps
  } = props;

  const theme = useThemeCTX();
  const dir = theme.state.dir;

  const controlData = React.useMemo(() => parseControlData(data), [data, dir]);
  const mergedProps = mergeProps({ size, radius, scheme, orientation }, defaultProps);

  const clxss = clsx(
    'Control',
    { [`Control--size-${mergedProps.size}`]: mergedProps.size },
    { [`Control--radius-${mergedProps.radius}`]: mergedProps.radius },
    { [`Control--scheme-${mergedProps.scheme}`]: mergedProps.scheme }
  );

  const [indicator, setIndicator] = React.useState({ transform: '', height: 0, width: 0 });
  const trackRef = React.useRef<HTMLDivElement>(null);
  const indexRef = React.useRef<number>(0);

  const BORDER_WIDTH = 0.666667;
  const TRACK_PADDING = 4 - BORDER_WIDTH;
  const TRACK_PADDING_OFFSET = TRACK_PADDING * 2;

  const translate = (axis: string, px: number) => `translate${axis}(${px}px)`;

  React.useEffect(() => {
    const node = trackRef.current!;
    const rect = node.getBoundingClientRect();

    if (mergedProps.orientation === 'horizontal') {
      const segmentPos = rect.width - TRACK_PADDING_OFFSET;
      const segmentSize = segmentPos / controlData.length;
      const activePos = segmentSize * (indexRef.current - 1) - segmentSize;

      setIndicator((current) => ({
        ...current,
        height: rect.height - TRACK_PADDING_OFFSET,
        width: segmentSize,
        transform: translate('X', activePos),
      }));
    }

    if (mergedProps.orientation === 'vertical') {
      const segmentPos = rect.height - TRACK_PADDING_OFFSET;
      const segmentSize = segmentPos / controlData.length;
      const activePos = segmentSize * (indexRef.current - 1) + segmentSize;

      setIndicator((current) => ({
        ...current,
        height: segmentSize,
        width: rect.width - TRACK_PADDING_OFFSET,
        transform: translate('Y', activePos),
      }));
    }
  }, [value]);

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      aria-orientation={mergedProps.orientation}
      data-orientation={mergedProps.orientation}
    >
      <div ref={trackRef} className="Control-track" style={{ padding: TRACK_PADDING }}>
        <div
          className="Control-indicator"
          style={{
            ...indicator,
            top: TRACK_PADDING - BORDER_WIDTH,
          }}
        />
        {(dir === 'rtl' ? controlData.reverse() : controlData)?.map((option, index) => {
          const isActive = option.value === value;

          if (isActive) {
            indexRef.current = index;
          }

          return (
            <button
              key={option.value}
              className="Control-segment"
              disabled={disabled || option.disabled}
              style={{ paddingBlock: TRACK_PADDING, paddingInline: TRACK_PADDING_OFFSET }}
              data-disabled={disabled || option.disabled}
              aria-disabled={disabled || option.disabled}
              onClick={() => onValueChange(option.value)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </Component>
  );
});
