import React from 'react';
import { useMergeRefs } from '../use-merge-refs';

const defaultEvents = ['mousedown', 'touchstart'] as const;

export function useMergedClickOutside<Target extends HTMLElement, Box extends HTMLElement>({
  events,
  callback,
  forwardedBoxRef,
  forwardedTargetRef,
}: {
  events?: string[];
  callback: () => void;
  forwardedBoxRef?: React.RefObject<Box>;
  forwardedTargetRef?: React.RefObject<Target>;
}) {
  const localBoxRef = React.useRef<Box>(null);
  const localTargetRef = React.useRef<Target>(null);

  const boxRef = useMergeRefs(forwardedBoxRef, localBoxRef);
  const targetRef = useMergeRefs(forwardedTargetRef, localTargetRef);

  React.useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};

      const boxNode = localBoxRef.current;
      const targetNode = localTargetRef.current;

      const shouldIgnoreBox = boxNode && boxNode.contains(target);
      const shouldIgnoreTarget = targetNode && targetNode.contains(target);

      if (shouldIgnoreBox || shouldIgnoreTarget) {
        return;
      }

      const shouldTriggerBox = boxNode && !boxNode.contains(target);
      const shouldTriggerTarget = targetNode && !targetNode.contains(target);

      if (shouldTriggerBox || shouldTriggerTarget) {
        callback();
      }
    };

    (events ?? defaultEvents).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events ?? defaultEvents).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [localBoxRef, localTargetRef]);

  return { boxRef, targetRef };
}
