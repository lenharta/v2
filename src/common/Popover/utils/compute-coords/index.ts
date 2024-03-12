import { ElementRects } from '../../types';
import { Coords, Placement } from '@/types/common';
import { getSide } from '../get-side';
import { getSideAxis } from '../get-side-axis';
import { getAlignmentAxis } from '../get-alignment-axis';
import { getAxisLength } from '../get-axis-length';
import { getAlignment } from '..';

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

  const commonX = target.x + target.width / 2 - floating.width / 2;
  const commonY = target.y + target.height / 2 - floating.height / 2;
  const commonAlign = target[alignLength] / 2 - floating[alignLength] / 2;

  switch (side) {
    case 'top':
      coords = { x: target.x / 2, y: target.y / 2 };
      break;
    case 'bottom':
      coords = { x: target.x / 2, y: target.y / 2 };
      break;
    case 'right':
      coords = { x: target.x / 2, y: target.y / 2 };
      break;
    case 'left':
      coords = { x: target.x / 2, y: target.y / 2 };
      break;
    default:
      coords = { x: target.x, y: target.y };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[alignAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    default:
  }

  return coords;
}
