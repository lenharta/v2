import { createSafeContext } from '../utils';

export type GridContextValue = {
  grow?: boolean;
  columns: number;
};

export const [GridProvider, useGridCTX] = createSafeContext(
  '[@v2/Grid]: Component not found in tree.'
);
