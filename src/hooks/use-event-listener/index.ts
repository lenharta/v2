import * as React from 'react';
import { useIsomorphicEffect } from '@/hooks/use-isomorphic-effect';

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(
  eventName: KW | KH | KM,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | MediaQueryListEventMap[KM] | Event
  ) => void,
  element?: React.RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = React.useRef(handler);

  useIsomorphicEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    const listener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    return () => targetElement.removeEventListener(eventName, listener, options);
  }, [eventName, element, options]);
}

export { useEventListener };
