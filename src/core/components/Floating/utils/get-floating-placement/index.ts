import { FloatingAlign, FloatingPlacementProps, FloatingSide } from '../../Floating.types';

const getFloatingPlacement = (dir: 'ltr' | 'rtl', placement: FloatingPlacementProps) => {
  const { value } = placement;
  const isInlinePlacement = value.includes('left') || value.includes('right');
  const isRightToLeft = dir === 'rtl';

  if (isRightToLeft && isInlinePlacement) {
    const [side, alignment] = value.split('-') as [FloatingSide, FloatingAlign];
    const oppositePlacement = side === 'right' ? 'left' : 'right';

    if (placement === undefined) {
      return oppositePlacement;
    }
    return `${oppositePlacement}-${alignment}`;
  }

  return value;
};

export { getFloatingPlacement };
