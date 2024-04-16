import * as React from 'react';

type Axis = 'x' | 'y';
type Side = 'top' | 'left' | 'right' | 'bottom';
type Length = 'width' | 'height';

type Coords = { [K in Axis]: number };
type Placement = { [K in Side]: number };
type Dimension = { [K in Length]: number };

export interface ResizeObserverRect extends Coords, Dimension, Placement {}

const defaultObserverRect: ResizeObserverRect = {
  height: 0,
  width: 0,
  bottom: 0,
  right: 0,
  left: 0,
  top: 0,
  x: 0,
  y: 0,
};

type ResizeObserverReturn<T extends HTMLElement = HTMLElement> = [
  React.MutableRefObject<T | undefined>,
  ResizeObserverRect,
];

export function useResizeObserver<T extends HTMLElement = any>(
  options: ResizeObserverOptions
): ResizeObserverReturn<T> {
  const ref = React.useRef<T>();
  const frame = React.useRef(0);
  const [rect, setRect] = React.useState(defaultObserverRect);

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
