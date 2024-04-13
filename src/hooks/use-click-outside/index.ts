import * as React from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

export function useClickOutside<T extends HTMLElement>(
  handler: () => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[]
) {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};

      if (Array.isArray(nodes)) {
        const shouldIgnore =
          target?.hasAttribute('data-ignore-outside-clicks') ||
          (!document.body.contains(target) && target.tagName !== 'HTML');

        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    (events || defaultEvents).forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      (events || defaultEvents).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);

  return ref;
}
