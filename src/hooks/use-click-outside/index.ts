import * as React from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events?: string[] | null
) {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};
      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);

  return ref;
}
