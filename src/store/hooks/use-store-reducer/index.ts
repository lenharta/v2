import React from 'react';

function useStoreReducer<T extends Record<string, any>>(initialState: T): [T, React.Dispatch<T>] {
  return React.useReducer(
    (current: T, update: Partial<T>) => ({
      ...current,
      ...update,
    }),
    initialState
  );
}

export { useStoreReducer };
