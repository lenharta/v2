import { FloatingDir, FloatingSide, FloatingAlign, FloatingPlacement } from '../Floating.types';

type FloatingPlacementData = [FloatingSide, FloatingAlign];

function getFloatingPlacement(dir: FloatingDir, placement: FloatingPlacement): FloatingPlacement {
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

export { getFloatingPlacement };
