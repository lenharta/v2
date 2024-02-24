import * as React from 'react';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { ControlSegment } from './Segment';
import { ControlIndicator } from './Indicator';
import { createRadiusToken, createTranslateToken, parseItemData } from '../utils';
import type { Orientation, Size } from '@/types/common';
import type { OptionItem } from '../utils';

// TODO: Update translation for theme direction

export interface ControlProps<T> {
  data?: T[] | OptionItem<T>[];
  value?: T;
  onChange?(value: T): void;
  orientation?: Orientation;
  radius?: Size | 'rd';
  fullWidth?: boolean;
  size?: Size;
}

const WRAPPER_PADDING = 4;

const scaleSegment = (size: Size = 'xs') => {
  const sizes = { xs: 1.1, sm: 1.2, md: 1.4, lg: 1.6, xl: 1.8 };
  return WRAPPER_PADDING * sizes[size];
};

export interface ControlComponent<T> {
  (props: ControlProps<T>): JSX.Element | null;
  displayName?: string;
  Indicator: typeof ControlIndicator;
  Segment: typeof ControlSegment;
}

const defaultProps: Partial<ControlProps<unknown>> = {
  orientation: 'horizontal',
  radius: 'xs',
};

export const Control: ControlComponent<any> = <T extends string>(props: ControlProps<T>) => {
  const { data, onChange, value, orientation, fullWidth, radius, size } = props;

  const theme = useThemeCTX();
  const direction = theme.state.dir;

  const activeRef = React.useRef<number>(0);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const parsedData = React.useMemo(() => parseItemData(data), [data, direction]);
  const outputData = direction === 'rtl' ? parsedData.reverse() : parsedData;

  const mergedProps = mergeProps({ orientation, radius, size }, defaultProps);
  const radiusStyle = createRadiusToken(mergedProps.radius);
  const wrapperOffset = scaleSegment(mergedProps.size);

  const [indicator, setIndicator] = React.useState({
    translate: '',
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    const node = wrapperRef.current!;
    const rect = node.getBoundingClientRect();

    if (mergedProps.orientation === 'horizontal') {
      const itemWidth = (rect.width - wrapperOffset) / outputData.length;
      const itemPosition = itemWidth * activeRef.current + WRAPPER_PADDING / 2;

      setIndicator(() => ({
        translate: createTranslateToken(...['X', itemPosition]),
        height: rect.height - wrapperOffset,
        width: itemWidth,
      }));
    }

    if (mergedProps.orientation === 'vertical') {
      const itemHeight = (rect.height - wrapperOffset) / outputData.length;
      const itemPosition = itemHeight * activeRef.current + WRAPPER_PADDING / 2;

      setIndicator(() => ({
        translate: createTranslateToken(...['Y', itemPosition]),
        height: itemHeight,
        width: rect.width - wrapperOffset,
      }));
    }
  }, [value]);

  return (
    <div
      ref={wrapperRef}
      className="Control"
      data-fullwidth={fullWidth}
      data-orientation={mergedProps.orientation}
      aria-orientation={mergedProps.orientation}
      style={{
        gap: wrapperOffset,
        padding: wrapperOffset,
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
          activeRef.current = index;
        }
        return (
          <Control.Segment
            key={segment.value}
            item={segment}
            value={value}
            onChange={onChange}
            isActive={segment.value === value || undefined}
            style={{ padding: wrapperOffset }}
          />
        );
      })}
    </div>
  );
};

Control.displayName = '@v2/Control';
Control.Segment = ControlSegment;
Control.Indicator = ControlIndicator;
