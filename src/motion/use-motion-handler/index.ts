import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { useMergeRefs } from '@/hooks';

export function useMotionHandler<E extends HTMLElement>(
  ref: React.ForwardedRef<E>,
  cb: (args: any) => void
) {
  const scopeRef = React.useRef<E>(null);
  const scopeRefs = useMergeRefs(ref, scopeRef) as unknown as React.RefObject<E>;
  const scope = ref ? scopeRefs : scopeRef;

  const { contextSafe } = useGSAP({ scope });

  return { scope, handler: contextSafe(cb) };
}
