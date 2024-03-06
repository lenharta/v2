import { flip, inline, limitShift, offset, shift } from '@floating-ui/react';

export interface FloatingMiddlewares {
  /** A visibility optimizer that changes the placement of the floating element in order to keep it in view, with the ability to flip to any placement */
  flip?: boolean;
  /** A visibility optimizer that shifts the floating element along the specified axes in order to keep it in view */
  shift?: boolean;
  /** A placement modifier that improves positioning for inline reference elements that span over multiple lines, such as hyperlinks or range selections */
  inline?: boolean;
}

export interface FloatingOffsetOptions {
  /** The axis that runs along the side of the floating element. */
  mainAxis?: number;
  /** The axis that runs along the alignment of the floating element. */
  crossAxis?: number;
  /** The same axis as crossAxis but applies only to aligned placements and inverts the end alignment. */
  alignmentAxis?: number;
}

export interface GetFloatingMiddlewareProps {
  middlewares?: FloatingMiddlewares;
  offset?: number;
}

export const getFloatingMiddlewares = (options: {
  middlewares?: FloatingMiddlewares;
  offset?: number;
}) => {
  const middlewares = [offset(options.offset)];

  if (options.middlewares?.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }

  if (options.middlewares?.flip) {
    middlewares.push(flip());
  }

  if (options.middlewares?.inline) {
    middlewares.push(inline());
  }

  return middlewares;
};
