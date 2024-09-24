import * as React from 'react';
import { Core } from '@/types';
import { cssTransform, valueToPixel } from '@/utils';

export function useControlPosition(
  props: Core.UseControlPositionProps
): Core.UseControlPositionReturn {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const observer = React.useRef<ResizeObserver>();

  const [refs, setRefs] = React.useState<Record<string, HTMLElement | null>>({});
  const [position, setPosition] = React.useState<Core.ControlPosition>(props.initialPosition);

  const setElementRefs = (segment: HTMLElement | null, key: string) => {
    refs[key] = segment;
    setRefs(refs);
  };

  const updateStyles = () => {
    const x = valueToPixel(position.left);
    const y = valueToPixel(position.top);

    if (thumbRef.current) {
      thumbRef.current.style.width = valueToPixel(position.width);
      thumbRef.current.style.height = valueToPixel(position.height);
      thumbRef.current.style.transform = cssTransform(x, y);
    }
  };

  const updatePosition = (
    segmentRect: DOMRect | DOMRectReadOnly,
    trackRect: DOMRect | DOMRectReadOnly
  ) => {
    if (!segmentRect || !trackRect) return;

    setPosition({
      top: segmentRect.top - trackRect.top,
      left: segmentRect.left - trackRect.left,
      width: segmentRect.width,
      height: segmentRect.height,
    });
  };

  const update = (segment: HTMLElement | null, track: HTMLElement | null) => {
    const trackRect = track?.getBoundingClientRect()!;
    const segmentRect = segment?.getBoundingClientRect()!;

    if (!segment || !track) {
      return;
    }

    if (segment && track) {
      updatePosition(segmentRect!, trackRect!);
      updateStyles();
    }
  };

  React.useEffect(() => {
    if (!trackRef.current || !refs[props.currentValue]) return;
    update(refs[props.currentValue], trackRef.current);
  }, []);

  React.useEffect(() => {
    observer.current = new ResizeObserver(() => {
      if (trackRef.current && refs[props.currentValue]) {
        const trackRect = trackRef.current.getBoundingClientRect();
        const segmentRect = refs[props.currentValue]!.getBoundingClientRect();
        updatePosition(segmentRect!, trackRect!);
      }
    });

    if (trackRef.current) {
      observer.current?.observe(trackRef.current);
      return () => {
        observer.current?.disconnect();
      };
    }
    return undefined;
  }, [trackRef.current, refs[props.currentValue]]);

  React.useEffect(() => updateStyles(), [position]);

  return {
    refs,
    thumbRef,
    trackRef,
    setElementRefs,
    update,
  };
}
