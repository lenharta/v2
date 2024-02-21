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

  const controlData = React.useMemo(() => parseControlData(data), []);
  const mergedProps = mergeProps({ size, radius, scheme, orientation }, defaultProps);

  const clxss = clsx(
    'Control',
    { [`Control--size-${mergedProps.size}`]: mergedProps.size },
    { [`Control--radius-${mergedProps.radius}`]: mergedProps.radius },
    { [`Control--scheme-${mergedProps.scheme}`]: mergedProps.scheme }
  );

  const [transform, setTransform] = React.useState({ transform: '' });
  const trackRef = React.useRef<HTMLDivElement>(null);
  const indexRef = React.useRef<number>(0);

  React.useEffect(() => {
    const node = trackRef.current!;
    const rect = node.getBoundingClientRect();
    const axis = mergedProps.orientation === 'horizontal' ? 'x' : 'y';
    const prop = mergedProps.orientation === 'horizontal' ? 'width' : 'height';

    const segmentSize = rect[prop] / controlData.length;
    const segmentOrigin = Number((segmentSize * indexRef.current).toFixed(0));

    const transformAxis = axis.toUpperCase();
    const transformValue = dir === 'ltr' ? segmentOrigin : segmentOrigin * -1;
    const transformProperty = `translate${transformAxis}(${transformValue}px)`;
    setTransform({ transform: transformProperty });
    console.log(transform);
  }, [value]);

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      aria-orientation={orientation}
      data-orientation={orientation}
      data-segment-track
    >
      <div
        className="Control-indicator"
        style={{
          ...transform,
          position: 'absolute',
          height: 24,
          width: 50,
          transition: 'ease 400ms all',
          backgroundColor: 'rgba(var(--rgb-accent), 0.2)',
        }}
      />
      <div ref={trackRef} className="Control-track" style={{ position: 'relative' }}>
        {controlData?.map((option, index) => {
          const isActive = option.value === value;

          if (isActive) {
            indexRef.current = index;
          }

          return (
            <button
              key={option.value}
              className="Control-segment"
              data-disabled={disabled || option.disabled}
              aria-disabled={disabled || option.disabled}
              disabled={disabled || option.disabled}
              onClick={() => {
                onValueChange(option.value);
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </Component>
  );
});

// <Component
// {...otherProps}
// ref={ref}
// className={clxss}
// aria-orientation={orientation}
// data-orientation={orientation}
// data-segment-track
// >
// <div ref={trackRef} className="Control-track">
//   {memoData?.map((option) => {
//     return (
//       <ControlSegment
//         key={option.value}
//         value={value}
//         option={option}
//         disabled={disabled}
//         onValueChange={onValueChange}
//         {...mergedProps}
//       />
//     );
//   })}
// </div>
// </Component>
