import { UseFloatingOptions } from '@/types';
import {
  size,
  flip,
  shift,
  offset,
  inline,
  limitShift,
  UseFloatingReturn,
} from '@floating-ui/react';

export function getFloatingMiddleware(
  options: UseFloatingOptions,
  getFloating: () => UseFloatingReturn<Element>
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
