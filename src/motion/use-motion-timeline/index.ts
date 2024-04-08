import * as React from 'react';
import { useMergeRefs } from '@/hooks';

export function useMotionTimeline<E extends HTMLElement>(forwardedRef?: React.ForwardedRef<E>) {
  const scope = React.useRef<E>(null);
  const timeline = React.useRef<gsap.core.Timeline>();
  const refs = useMergeRefs<E>(forwardedRef, scope);
  return {
    scope: forwardedRef ? (refs as unknown as React.RefObject<E>) : scope,
    timeline,
  };
}
