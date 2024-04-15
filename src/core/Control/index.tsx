import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { createEventCallback } from '@/utils';

interface ControlGroupItem {
  value: string | number;
  label?: string | number;
  disabled?: boolean | undefined;
}

interface ControlGroupItemParsed {
  value: string;
  label: string;
  disabled?: boolean | undefined;
}

function parseControlGroupItem(item: string | number | ControlGroupItem): ControlGroupItemParsed {
  if (typeof item === 'number' || typeof item === 'string') {
    return {
      value: (item as number).toString(),
      label: (item as number).toString(),
    };
  }
  if (!('label' in item)) {
    return {
      ...item,
      value: (item.value as number).toString(),
      label: (item.value as number).toString(),
    };
  }
  return {
    ...item,
    value: (item.value as number).toString(),
    label: (item.label as number).toString(),
  };
}

function parseControlGroupData(
  data?: (string | number | ControlGroupItem)[]
): ControlGroupItemParsed[] {
  return !data ? [] : data.map(parseControlGroupItem);
}

export interface ControlProps {
  value: string;
  size?: Core.Size3 | undefined;
  data?: Omit<ControlGroupItem, 'disabled'>[] | undefined;
  orientation?: Core.Orientation | undefined;
  onKeyDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  onChange: (value: string) => void;
}

const createKeyDownGroup = <T extends HTMLElement = HTMLButtonElement>(props: {
  onKeyDown?: ((event: React.KeyboardEvent<T>) => void) | undefined;
  orientation?: Core.Orientation | undefined;
}) => {
  const { onKeyDown, orientation = 'horizontal' } = props;
  return createEventCallback(onKeyDown, (event) => {
    event.stopPropagation();

    const parentElement = event.currentTarget.parentElement!;
    const elements = (Array.from(parentElement.children) as T[]) || [];
    const currentIndex = elements.findIndex((node) => node === event.currentTarget);

    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;
    const lastIndex = elements.length - 1;

    const moveFocusToNextIndex = () => elements[nextIndex]?.focus();
    const moveFocusToPrevIndex = () => elements[prevIndex]?.focus();
    const moveFocusToLastIndex = () => elements[lastIndex]?.focus();
    const moveFocusToFirstIndex = () => elements[0]?.focus();

    const ArrowDown = () => {
      if (orientation === 'vertical') moveFocusToNextIndex?.();
      if (orientation === 'horizontal') moveFocusToLastIndex?.();
    };

    const ArrowUp = () => {
      if (orientation === 'vertical') moveFocusToPrevIndex?.();
      if (orientation === 'horizontal') moveFocusToFirstIndex?.();
    };

    const ArrowLeft = () => {
      if (orientation === 'vertical') moveFocusToFirstIndex?.();
      if (orientation === 'horizontal') moveFocusToPrevIndex?.();
    };

    const ArrowRight = () => {
      if (orientation === 'vertical') moveFocusToLastIndex?.();
      if (orientation === 'horizontal') moveFocusToNextIndex?.();
    };

    const End = () => moveFocusToLastIndex?.();
    const Home = () => moveFocusToFirstIndex?.();

    const PageUp = () => moveFocusToFirstIndex?.();
    const PageDown = () => moveFocusToLastIndex?.();

    const events = {
      ArrowDown,
      ArrowUp,
      ArrowLeft,
      ArrowRight,
      PageUp,
      PageDown,
      Home,
      End,
    }[event.code];

    events?.();
  });
};

export type ControlFactory = React.FC<ControlProps> & {};

interface ThumbPositon {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const Control: ControlFactory = (props) => {
  const { size = 'sm', data, value, orientation = 'horizontal', onChange, ...otherProps } = props;

  const parsedData = React.useMemo(() => parseControlGroupData(data), [data]);

  const initialState: ThumbPositon = { top: 0, left: 0, width: 0, height: 0 };
  const [position, setPosition] = React.useState<ThumbPositon>(initialState);

  const updatePosition = (props: { target: HTMLElement; parent: HTMLElement }) => {
    if (!props.parent || !props.target) {
      return { top: 0, left: 0, width: 0, height: 0 };
    }
    const trackRect = props.parent?.getBoundingClientRect()!;
    const targetRect = props.target?.getBoundingClientRect()!;

    return {
      top: targetRect?.top - trackRect?.top,
      left: targetRect?.left - trackRect?.left,
      width: targetRect?.width,
      height: targetRect?.height,
    };
  };

  // React.useEffect(() => {
  //   console.log(position);
  // }, [position]);

  const updateThumbStyle = React.useMemo(
    () => ({
      transform: `translateY(${position.top}px) translateX(${position.left}px)`,
      width: `${position.width}px`,
      height: `${position.height}px`,
    }),
    [position, orientation]
  );

  const css = {
    root: 'control',
    item: clsx('control-item', `control-item--${size}`),
    label: clsx('control-label', `control-label--${size}`),
    track: clsx('control-track', `control-track--${size}`),
    thumb: clsx('control-thumb', `control-thumb--${size}`),
  };

  return (
    <div className={css.root}>
      <div className={css.track} aria-orientation={orientation}>
        {parsedData.map((item) => {
          const isSelected = item.value === value ?? undefined;
          return (
            <button
              key={item.value}
              type="button"
              value={item.value}
              className={css.item}
              aria-selected={isSelected}
              onClick={createEventCallback(otherProps.onClick, (event) => {
                event.stopPropagation();
                const { currentTarget } = event ?? {};
                const parent = currentTarget.parentElement!;
                const target = currentTarget!;

                onChange(currentTarget.value);
                setPosition(updatePosition({ target, parent }));
              })}
              onKeyDown={createKeyDownGroup({
                onKeyDown: otherProps.onKeyDown,
                orientation,
              })}
            >
              <span className={css.label}>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div
        className={css.thumb}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transitionProperty: 'transform, height, width',
          transitionTimingFunction: 'ease',
          transitionDuration: '400ms',
          ...updateThumbStyle,
        }}
      />
    </div>
  );
};
