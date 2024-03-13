import { UseFloatingReturn, flip, inline, limitShift, offset, shift } from '@floating-ui/react';
import { UseFloatingOptions } from '../use-floating';

export function getFloatingMiddleware(
  options: UseFloatingOptions,
  getFloating?: () => UseFloatingReturn<Element>
) {
  const middlewares = [offset(options.offset)];

  if (options.middleware?.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }

  if (options.middleware?.flip) {
    middlewares.push(flip());
  }

  if (options.middleware?.inline) {
    middlewares.push(inline());
  }

  // if (options.middleware?.size || options.width === 'target') {
  //   middlewares.push(size({}));
  // }

  return middlewares;
}
