import { Dimensions } from '@/types/common';
import { isHTMLElement } from '@/utils';

export const getCssDimension = (element: Element): Dimensions & { _shouldFallback: boolean } => {
  const css = getComputedStyle(element);

  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;

  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;

  const shouldFallbackWidth = Math.round(width) !== offsetWidth;
  const shouldFallbackHeight = Math.round(height) !== offsetHeight;
  const shouldFallback = shouldFallbackWidth || shouldFallbackHeight;

  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }

  return { width, height, _shouldFallback: shouldFallback };
};
