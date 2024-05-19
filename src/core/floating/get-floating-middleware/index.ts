import { Core } from '@/types';
import {
  size,
  flip,
  shift,
  inline,
  offset,
  limitShift,
  UseFloatingReturn,
} from '@floating-ui/react';

function getFloatingMiddleware<E extends Element = Element>(
  options: Core.FloatingOptions,
  getFloating: () => UseFloatingReturn<E>
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