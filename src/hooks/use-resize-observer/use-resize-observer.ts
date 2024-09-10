import React from 'react';

interface ResizeObserverCoords {
  x: number;
  y: number;
}

interface ResizeObserverPlacement {
  bottom: number;
  right: number;
  left: number;
  top: number;
}

interface ResizeObserverDimensions {
  height: number;
  width: number;
}

interface ResizeObserverRect
  extends ResizeObserverCoords,
    ResizeObserverPlacement,
    ResizeObserverDimensions {}

type ResizeObserverReturn<T extends HTMLElement = HTMLElement> = [
  React.MutableRefObject<T | undefined>,
  ResizeObserverRect,
];

const defaultRect: ResizeObserverRect = {
  width: 0,
  height: 0,
  bottom: 0,
  right: 0,
  left: 0,
  top: 0,
  x: 0,
  y: 0,
};

function useResizeObserver<T extends HTMLElement = any>(
  options: ResizeObserverOptions
): ResizeObserverReturn<T> {
  const [rect, setRect] = React.useState(defaultRect);
  const frame = React.useRef(0);
  const ref = React.useRef<T>();

  const observer = React.useMemo(() => {
    return new ResizeObserver((entries: any) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    });
  }, []);

  React.useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current, options);
    }
    return () => {
      observer?.disconnect();
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [ref.current]);

  return [ref, rect];
}

export { useResizeObserver };
