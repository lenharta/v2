import { getWindow } from '../get-window';

export const isNode = (value: unknown): value is Node => {
  return value instanceof Element || value instanceof getWindow(value).Node;
};
