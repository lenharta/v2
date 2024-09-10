import { Core } from '@/types';

export type FloatingPlacementData = [Core.FloatingSide, Core.FloatingAlign];

export function getFloatingPlacement(
  dir: Core.FloatingDir,
  placement: Core.FloatingPlacement
): Core.FloatingPlacement {
  const isInlinePlacement = placement.includes('left') || placement.includes('right');
  const isRightToLeft = dir === 'rtl';

  if (isRightToLeft && isInlinePlacement) {
    const [side, alignment] = placement.split('-') as FloatingPlacementData;
    const oppositePlacement = side === 'right' ? 'left' : 'right';

    if (placement === undefined) {
      return oppositePlacement;
    }
    return `${oppositePlacement}-${alignment}`;
  }
  return placement;
}
