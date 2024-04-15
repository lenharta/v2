import * as React from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'] as const;

export function useOutsideClick(
  nodes: React.RefObject<HTMLElement>[],
  handler: () => void,
  events?: string[]
) {
  React.useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};

      const shouldIgnore = nodes.every((node) => node.current?.contains(target));

      const shouldTrigger = nodes.every((node) => !node.current?.contains(target));

      if (shouldIgnore && !shouldTrigger) return;

      if (shouldTrigger && !shouldIgnore) handler();
    };

    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    };
  }, nodes);
}
