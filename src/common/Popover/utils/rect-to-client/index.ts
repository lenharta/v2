import { ClientRect, Rect } from '@/types/common';

export function rectToClientRect(rect: Rect): ClientRect {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  };
}
