import React from 'react';
import { Store } from '@/types';

function useStoreReducer<T extends Store.State = Store.State>(
  initialStore: T,
  initalizer: (arg: T & Partial<T>) => T & Partial<T>
) {
  return React.useReducer(
    (current: T, update: Partial<T>) => ({
      ...current,
      ...update,
    }),
    initialStore,
    initalizer
  );
}

export { useStoreReducer };
