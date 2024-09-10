import React from 'react';
import { Core } from '@/types';
import { mergeRefs } from '@/utils';

/** A react hook that return a callback function to merge multiple refs into one */
function useMergeRefs<T>(...refs: Core.ViableRef<T>[]) {
  return React.useCallback(mergeRefs(...refs), refs);
}

export { useMergeRefs };
