import { getWindow } from '@/utils';

export const getComputedStyle = (element: Element): CSSStyleDeclaration => {
  return getWindow(element).getComputedStyle(element);
};
