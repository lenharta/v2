import {
  size,
  flip,
  shift,
  inline,
  offset,
  Middleware,
  limitShift,
  UseFloatingReturn,
} from '@floating-ui/react';

import { UseFloatingOptions } from '../Floating.types';

function getFloatingMiddleware<E extends Element = HTMLElement>(
  options: UseFloatingOptions,

  getFloating: () => UseFloatingReturn<E>
): Middleware[] {
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

  if (options.middleware?.size || options.width === 'target') {
    middlewares.push(
      size({
        apply({ rects, availableWidth, availableHeight }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};

          if (options.middleware?.size) {
            Object.assign(styles, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`,
            });
          }

          if (options.width === 'target') {
            Object.assign(styles, {
              width: `${rects.reference.width}px`,
            });
          }
        },
      })
    );
  }

  return middlewares;
}

export { getFloatingMiddleware };
