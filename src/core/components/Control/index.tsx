import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components/Box';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { parseItemData } from '@/core/utils';
import { ControlSegment } from '@/core/components/Control/Segment';
import { cssTransform, valueToPixel } from '@/utils';

interface ControlStateProps {
  data?: Core.Item[] | undefined;
  value: string;
  onChange: (value: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ControlProps extends ControlStateProps {
  orientation?: Core.Orientation | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  onKeyDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
}

type ControlFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ControlProps;
  comps: {
    Segment: typeof ControlSegment;
  };
}>;

type ControlPosition = {
  height: number;
  width: number;
  left: number;
  top: number;
};

const Control = factory<ControlFactory>((props, ref) => {
  const { data, value, onChange, className, orientation = 'horizontal', ...forwardedProps } = props;

  const itemData = React.useMemo(() => parseItemData(data), [data]);
  const [refs, setRefs] = React.useState<Record<string, HTMLElement | null>>({});
  const [position, setPosition] = React.useState<ControlPosition>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const thumbRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const parentResizeObserver = React.useRef<ResizeObserver>();

  const setElementRefs = (element: HTMLElement | null, val: string) => {
    refs[val] = element;
    setRefs(refs);
  };

  const updateStyle = () => {
    const x = valueToPixel(position.left);
    const y = valueToPixel(position.top);

    if (thumbRef.current) {
      thumbRef.current.style.transform = cssTransform(x, y);
      thumbRef.current.style.width = valueToPixel(position.width);
      thumbRef.current.style.height = valueToPixel(position.height);
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

  const onUpdate = (target: HTMLElement | null, parent: HTMLElement | null) => {
    if (!target || !parent) return;
    const parentRect = parent?.getBoundingClientRect();
    const targetRect = target?.getBoundingClientRect();
    updatePosition(targetRect!, parentRect!);
    updateStyle();
  };

  React.useEffect(() => {
    if (!trackRef.current || !refs[value]) return;
    onUpdate(refs[value], trackRef.current);
  }, []);

  React.useEffect(() => {
    parentResizeObserver.current = new ResizeObserver(() => {
      if (trackRef.current && refs[value]) {
        const parentRect = trackRef.current.getBoundingClientRect();
        const targetRect = refs[value]!.getBoundingClientRect();
        updatePosition(targetRect, parentRect);
      }
    });

    if (trackRef.current) {
      parentResizeObserver.current?.observe(trackRef.current);

      return () => {
        parentResizeObserver.current?.disconnect();
      };
    }
    return undefined;
  }, [trackRef.current, refs[value]]);

  React.useEffect(() => {
    updateStyle();
  }, [position]);

  return (
    <Box {...forwardedProps} className={clsx('v2-control', className)} ref={ref}>
      <div
        aria-orientation={orientation}
        data-orientation={orientation}
        className="control-track"
        ref={trackRef}
      >
        {(itemData as Core.Item[]).map((item) => (
          <Control.Segment
            key={item.value}
            refs={refs}
            ref={(node) => setElementRefs(node, item.value)}
            value={item.value}
            label={item.label}
            selected={item.value === value || undefined}
            orientation={orientation}
            onKeyDown={forwardedProps.onKeyDown}
            onClick={forwardedProps.onClick}
            onChange={onChange}
            onUpdate={onUpdate}
          />
        ))}
      </div>
      <div ref={thumbRef} className="control-thumb" />
    </Box>
  );
});

Control.Segment = ControlSegment;
Control.displayName = '@v2/Control';
export { Control, type ControlStateProps, type ControlProps };
