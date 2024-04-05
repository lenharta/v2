import { Core } from '@/types';

export const getFloatingPosition = (
  dir: Core.FloatingDir,
  pos: Core.FloatingPosition
): Core.FloatingPosition => {
  const isInlinePosition = pos.includes('left') || pos.includes('right');
  const isRightToLeft = dir === 'rtl';

  if (isRightToLeft && isInlinePosition) {
    const [side, placement] = pos.split('-') as [Core.FloatingSide, Core.FloatingPlacement];
    const flippedPosition = side === 'right' ? 'left' : 'right';

    return pos === undefined ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return pos;
};
