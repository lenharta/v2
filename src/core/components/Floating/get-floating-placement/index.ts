import { FloatingDir, FloatingSide, FloatingAlign, FloatingPlacement } from '../types';

type FloatingPlacementData = [FloatingSide, FloatingAlign];

type GetFloatingPlacement = (dir: FloatingDir, placement: FloatingPlacement) => FloatingPlacement;

const getFloatingPlacement: GetFloatingPlacement = (dir, placement) => {
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
};

export { getFloatingPlacement };
