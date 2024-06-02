import React from 'react';
import { useEventListener } from '../use-event-listener';

const outsideEvents = {
  mousedown: 'mousedown',
  mouseup: 'mouseup',
  touchstart: 'touchstart',
  touchend: 'touchend',
  focusin: 'focusin',
  focusout: 'focusout',
} as const;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T> | Array<React.RefObject<T>>,
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
  eventType: keyof typeof outsideEvents = outsideEvents.mousedown,
  eventOptions: AddEventListenerOptions = {}
) {
  useEventListener(
    eventType,
    (event: any) => {
      const target = event.target as Node;

      if (!target || !target.isConnected) {
        return;
      }

      const isOutside = Array.isArray(ref)
        ? ref
            .filter((r) => Boolean(r.current))
            .every((r) => r.current && !r.current.contains(target))
        : ref.current && !ref.current.contains(target);

      if (isOutside) {
        handler(event);
      }
    },
    undefined,
    eventOptions
  );
}

export { useClickOutside };
