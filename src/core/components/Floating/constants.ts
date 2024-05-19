import { FloatingAlign, FloatingPlacement, FloatingSide } from './types';

const sides: FloatingSide[] = ['top', 'right', 'bottom', 'left'];

const alignments: FloatingAlign[] = ['start', 'end'];

const placements: FloatingPlacement[] = sides.reduce(
  (acc: FloatingPlacement[], side) =>
    acc.concat(side, `${side}-${alignments[0]}`, `${side}-${alignments[1]}`),
  []
);

const lookupOppositeSide = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
};

const lookupOppositeAlign = {
  start: 'end',
  end: 'start',
};

export { sides, alignments, placements, lookupOppositeSide, lookupOppositeAlign };
