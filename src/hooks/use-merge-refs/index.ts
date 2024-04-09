import * as React from 'react';
import { Core } from '@/types';

/** A utility function that assigns a singular ref */

export function assignRef<T>(ref: Core.ViableRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  }
  if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

/** A utility function that merges multiple refs */

export function mergeRefs<T>(...refs: Core.ViableRef<T>[]) {
  return (node: T | null) => refs.forEach((ref) => assignRef(ref, node));
}

/** A react hook that return a callback function to merge multiple refs into one */

export function useMergeRefs<T>(...refs: Core.ViableRef<T>[]) {
  return React.useCallback(mergeRefs(...refs), refs);
}
