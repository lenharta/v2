import { ClientRect, Rect } from '@/types/common';

export function clientRectToRect(rect: ClientRect): Rect {
  return {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
  };
}
