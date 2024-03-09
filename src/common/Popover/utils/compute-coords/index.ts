import { ElementRects } from '../../types';
import { Coords, Placement } from '@/types/common';
import { getSide } from '../get-side';
import { getSideAxis } from '../get-side-axis';
import { getAlignmentAxis } from '../get-alignment-axis';
import { getAxisLength } from '../get-axis-length';
import { getAlignment } from '../get-alignment';

export function computeCoords(
  { target, floating }: ElementRects,
  placement: Placement,
  rtl?: boolean
) {
  const side = getSide(placement);
  const sideAxis = getSideAxis(placement);
  const alignAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignAxis);
  const isVertical = sideAxis === 'y';

  let coords: Coords;

  const sharedX = target.x + target.width / 2 - floating.width / 2;
  const sharedY = target.y + target.height / 2 - floating.height / 2;
  const sharedAlign = target[alignLength] / 2 - floating[alignLength] / 2;

  switch (side) {
    case 'top':
      coords = { x: sharedX, y: target.y - floating.height };
      break;
    case 'bottom':
      coords = { x: sharedX, y: target.y + target.height };
      break;
    case 'right':
      coords = { x: target.x + target.width, y: sharedY };
      break;
    case 'left':
      coords = { x: target.x - floating.width, y: sharedY };
      break;
    default:
      coords = { x: target.x, y: target.y };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[alignAxis] -= sharedAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignAxis] += sharedAlign * (rtl && isVertical ? -1 : 1);
      break;
    default:
  }

  return coords;
}
