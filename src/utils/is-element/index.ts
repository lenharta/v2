import { getWindow } from '../get-window';

export const isElement = (value: unknown): value is Element => {
  return value instanceof Element || value instanceof getWindow(value).Element;
};
