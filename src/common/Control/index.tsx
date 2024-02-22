import clsx from 'clsx';
import * as React from 'react';
import { useThemeCTX } from '@/store';
import { Orientation, Size } from '@/types/common';
import { mergeProps } from '@/utils';

interface ControlItem<T extends string> {
  value: T;
  label?: string;
  disabled?: boolean;
}

function parseControlItem<T extends string>(item: T | ControlItem<T>) {
  if (typeof item === 'string' || typeof item === 'number') {
    return {
      value: item,
      label: item,
    };
  }

  if (!('label' in item)) {
    return {
      label: item.value,
      value: item.value,
      disabled: item.disabled,
    };
  }

  return item;
}

function parseControlData<T extends string>(data?: T[] | ControlItem<T>[]) {
  if (!data) return [];
  return data.map((option) => parseControlItem<T>(option));
}

export interface ControlProps<T extends string> {
  data?: T[] | ControlItem<T>[];
  value?: T;
  onChange?(value: T): void;
  orientation?: Orientation;
  radius?: Size | 'rd';
  fullWidth?: boolean;
  size?: Size;
}

export interface ControlSegmentProps<T extends string> {
  value?: T;
  style?: React.CSSProperties;
  onChange?(value: T): void;
  isActive?: boolean;
  item?: {
    value: T;
    label?: string;
    disabled?: boolean;
  };
}

const WRAPPER_PADDING = 4;

const getRadiusToken = (size: Size | 'rd' = 'xs') => {
  return `var(--radius-${size})`;
};

const scaleSegmentSize = (size: Size = 'xs') => {
  const sizes = { xs: 1.1, sm: 1.2, md: 1.4, lg: 1.6, xl: 1.8 };
  return WRAPPER_PADDING * sizes[size];
};

const translate = (axis: string, px: number) => `translate${axis}(${px}px)`;

export type ControlComponent<T extends string = string> = React.FC<ControlProps<T>> & {
  Indicator: React.FC<{ style: React.CSSProperties }>;
  Segment: React.FC<ControlSegmentProps<T>>;
};

const defaultProps: Partial<ControlProps<any>> = {
  orientation: 'horizontal',
  radius: 'xs',
};

export const Control: ControlComponent = (props) => {
  const { data, onChange, value, orientation, fullWidth, radius, size } = props;

  const theme = useThemeCTX();
  const direction = theme.state.dir;

  const parsedData = React.useMemo(() => parseControlData(data), [data, direction]);
  const outputData = direction === 'rtl' ? parsedData.reverse() : parsedData;

  const mergedProps = mergeProps({ orientation, radius, size }, defaultProps);

  const activeRef = React.useRef<number>(0);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [indicator, setIndicator] = React.useState({
    translate: '',
    height: 0,
    width: 0,
  });

  const clxss = clsx('Control');
  const radiusStyle = getRadiusToken(mergedProps.radius);
  const WRAPPER_PADDING_SIZE = scaleSegmentSize(mergedProps.size);

  React.useEffect(() => {
    const node = wrapperRef.current!;
    const rect = node.getBoundingClientRect();

    if (mergedProps.orientation === 'horizontal') {
      const itemWidth = (rect.width - WRAPPER_PADDING_SIZE) / parsedData.length;
      const itemPosition = itemWidth * activeRef.current - itemWidth;

      setIndicator(() => ({
        translate: translate(...['X', itemPosition]),
        height: rect.height - WRAPPER_PADDING_SIZE,
        width: itemWidth,
      }));
    }

    if (mergedProps.orientation === 'vertical') {
      const itemHeight = (rect.height - WRAPPER_PADDING_SIZE) / parsedData.length;
      const itemPosition = itemHeight * activeRef.current - itemHeight;

      setIndicator(() => ({
        translate: translate(...['Y', itemPosition]),
        height: itemHeight,
        width: rect.width - WRAPPER_PADDING_SIZE,
      }));
    }
  }, [value]);

  return (
    <div
      ref={wrapperRef}
      className={clxss}
      data-fullwidth={fullWidth}
      data-orientation={mergedProps.orientation}
      aria-orientation={mergedProps.orientation}
      style={{
        gap: WRAPPER_PADDING_SIZE,
        padding: WRAPPER_PADDING_SIZE,
        borderRadius: radiusStyle,
      }}
    >
      <Control.Indicator
        style={{
          borderRadius: radiusStyle,
          transform: indicator.translate,
          height: indicator.height,
          width: indicator.width,
        }}
      />

      {outputData.map((segment, index) => {
        if (segment.value === value) {
          activeRef.current = index - 1;
        }
        return (
          <Control.Segment
            key={segment.value}
            item={segment}
            value={value}
            onChange={onChange}
            isActive={segment.value === value || undefined}
            style={{ padding: WRAPPER_PADDING_SIZE }}
          />
        );
      })}
    </div>
  );
};

Control.Indicator = (props) => {
  const { style } = props;
  return <div className="Control-indicator" style={style} />;
};

Control.Segment = (props) => {
  const { item, onChange, style, isActive } = props;

  if (!item?.value) return null;

  return (
    <button
      className="Control-segment"
      onClick={() => onChange?.(item.value)}
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
