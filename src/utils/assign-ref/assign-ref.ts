import React from 'react';
import { Core } from '@/types';

/** A utility function that assigns a singular ref */

function assignRef<T>(ref: Core.ViableRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  }
  if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

export { assignRef };
