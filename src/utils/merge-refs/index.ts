import { Core } from '@types';
import { assignRef } from '../assign-ref';

/** A utility function that merges multiple refs */

function mergeRefs<T>(...refs: Core.ViableRef<T>[]) {
  return (node: T | null) => refs.forEach((ref) => assignRef(ref, node));
}

export { mergeRefs };
