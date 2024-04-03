import { Dir, FloatingPlacement, FloatingPosition, FloatingSide } from '@/types';

export function getFloatingPosition(dir: Dir, position: FloatingPosition): FloatingPosition {
  const isRTL = dir === 'rtl';
  const isInline = position.includes('left') || position.includes('right');

  if (isRTL && isInline) {
    const [side, placement] = position.split('-') as [FloatingSide, FloatingPlacement];
    const flippedPosition = side === 'right' ? 'left' : 'right';
    return position === undefined ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}
