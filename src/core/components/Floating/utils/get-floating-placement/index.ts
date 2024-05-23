import { FloatingAlign, FloatingPlacement, FloatingSide } from '../../Floating.types';

const getFloatingPlacement = (
  dir: 'ltr' | 'rtl',
  placement: FloatingPlacement
): FloatingPlacement => {
  const isInlinePlacement = placement.includes('left') || placement.includes('right');
  const isRightToLeft = dir === 'rtl';

  if (isRightToLeft && isInlinePlacement) {
    const [side, alignment] = placement.split('-') as [FloatingSide, FloatingAlign];
    const oppositePlacement = side === 'right' ? 'left' : 'right';

    if (placement === undefined) {
      return oppositePlacement;
    }
    return `${oppositePlacement}-${alignment}`;
  }

  return placement;
};

export { getFloatingPlacement };
