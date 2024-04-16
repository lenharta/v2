import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { ControlSegment } from './ControlSegment';

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
  data?: Omit<ControlGroupItem, 'disabled'>[] | undefined;
  value: string;
  size?: Core.Size3 | undefined;
  scheme?: Core.Scheme;
  variant?: 'default' | 'accent';
  orientation?: Core.Orientation | undefined;
  onKeyDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  onChange: (value: string) => void;
}

export type ControlFactory = React.FC<ControlProps> & {
  Segment: typeof ControlSegment;
};

interface ControlPosition {
  height: number;
  width: number;
  left: number;
  top: number;
}

export const Control: ControlFactory = (props) => {
  const {
    size = 'sm',
    data,
    value,
    scheme = 'primary',
    variant = 'default',
    orientation = 'horizontal',
    onChange,
    ...otherProps
  } = props;

  const parsedData = React.useMemo(() => parseControlGroupData(data), [data]);

  const initialPosition: ControlPosition = { top: 0, left: 0, width: 0, height: 0 };
  const [position, setPosition] = React.useState(initialPosition);
  const [refs, setRefs] = React.useState<Record<string, HTMLElement | null>>({});

  const thumbRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);
  const parentResizeObserver = React.useRef<ResizeObserver>();

  const setElementRefs = (element: HTMLElement | null, val: string) => {
    refs[val] = element;
    setRefs(refs);
  };

  const updateStyle = () => {
    if (thumbRef.current) {
      thumbRef.current.style.transform = `translateY(${position.top}px) translateX(${position.left}px)`;
      thumbRef.current.style.width = `${position.width}px`;
      thumbRef.current.style.height = `${position.height}px`;
    }
  };

  const updatePosition = (
    targetRect: DOMRect | DOMRectReadOnly,
    parentRect: DOMRect | DOMRectReadOnly
  ) => {
    if (!targetRect || !parentRect) return;
    setPosition({
      top: targetRect.top - parentRect.top,
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      height: targetRect.height,
    });
  };

  const update = (target: HTMLElement | null, parent: HTMLElement | null) => {
    if (!target || !parent) return;
    const parentRect = parent?.getBoundingClientRect();
    const targetRect = target?.getBoundingClientRect();
    updatePosition(targetRect!, parentRect!);
    updateStyle();
  };

  React.useEffect(() => {
    if (!parentRef.current || !refs[value]) return;
    update(refs[value], parentRef.current);
  }, []);

  React.useEffect(() => {
    parentResizeObserver.current = new ResizeObserver(() => {
      if (parentRef.current && refs[value]) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const targetRect = refs[value]!.getBoundingClientRect();
        updatePosition(targetRect, parentRect);
      }
    });

    if (parentRef.current) {
      parentResizeObserver.current?.observe(parentRef.current);

      return () => {
        parentResizeObserver.current?.disconnect();
      };
    }
    return undefined;
  }, [parentRef.current, refs[value]]);

  React.useEffect(() => {
    updateStyle();
  }, [position]);

  return (
    <div
      className={clsx('control', {
        [`control--${variant}`]: variant,
        [`control--size-${size}`]: size,
      })}
    >
      <div className="control-track" ref={parentRef} aria-orientation={orientation}>
        {parsedData.map((item) => (
          <Control.Segment
            key={item.value}
            refs={refs}
            ref={(node) => setElementRefs(node, item.value)}
            css={{ item: 'control-item', label: 'control-label' }}
            value={item.value}
            label={item.label}
            isSelected={item.value === value || undefined}
            orientation={orientation}
            onKeyDown={otherProps.onKeyDown}
            onClick={otherProps.onClick}
            onChange={onChange}
            onUpdate={update}
          />
        ))}
      </div>
      <div ref={thumbRef} className="control-thumb" />
    </div>
  );
};

Control.displayName = '@v2/core/Control';
Control.Segment = ControlSegment;
