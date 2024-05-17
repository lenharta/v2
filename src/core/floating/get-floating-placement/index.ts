import { Core } from '@/types';

function getFloatingPlacement(dir: Core.FloatingDir, placement: Core.FloatingPlacement) {
  const isInlinePlacement = placement.includes('left') || placement.includes('right');
  const isRightToLeft = dir === 'rtl';

  if (isRightToLeft && isInlinePlacement) {
    const [side, alignment] = placement.split('-') as [Core.FloatingSide, Core.FloatingAlign];
    const flippedPlacement = side === 'right' ? 'left' : 'right';

    if (placement === undefined) {
      return flippedPlacement;
    }
    return `${flippedPlacement}-${alignment}`;
  }

  return placement;
}

export { getFloatingPlacement };
