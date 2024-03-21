import { getWindow } from '../get-window';

export const isHTMLElement = (value: unknown): value is HTMLElement => {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
};
