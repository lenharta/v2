import { getWindow } from '../get-window/get-window';

const isElement = (value: unknown): value is Element => {
  return value instanceof Element || value instanceof getWindow(value).Element;
};

export { isElement };
