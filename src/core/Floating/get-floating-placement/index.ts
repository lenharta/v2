import { Floating } from '@/types';

export function getFloatingPlacement(dir: Floating.Dir, placement: Floating.Placement) {
  const isInlinePlacement = placement.includes('left') || placement.includes('right');
  const isRightToLeft = dir === 'rtl';

  if (isRightToLeft && isInlinePlacement) {
    const [side, alignment] = placement.split('-') as Floating.PlacementData;
    const flippedPlacement = side === 'right' ? 'left' : 'right';

    if (placement === undefined) {
      return flippedPlacement;
    }
    return `${flippedPlacement}-${alignment}`;
  }

  return placement;
}
