import { Floating } from '@/types';
import { useDidUpdate } from '@/hooks';
import { useFloatingUpdate } from '../use-floating-update';
import { getFloatingMiddleware } from '../get-floating-middleware';
import { UseFloatingReturn, useFloating } from '@floating-ui/react';

export function useFloatingPayload<E extends Element = Element>(options: Floating.Options) {
  const onClose = () => {
    if (options.opened) {
      options.onClose?.();
      options.onChange?.(false);
    }
  };

  const onOpen = () => {
    if (!options.opened) {
      options.onChange?.(true);
      options.onOpen?.();
    }
    if (options.opened) {
      options.onChange?.(false);
      options.onClose?.();
    }
  };

  const payload: UseFloatingReturn<E> = useFloating({
    strategy: options.strategy,
    placement: options.placement,
    middleware: getFloatingMiddleware(options, () => payload),
  });

  useFloatingUpdate({
    opened: options.opened,
    placement: options.placement,
    placementDependencies: options.placementDependencies || [],
    floating: payload,
  });

  useDidUpdate(() => {
    options.onPlacementChange?.(payload.placement);
  }, [payload.placement]);

  useDidUpdate(() => {
    if (!options.opened) {
      options.onClose?.();
    }
    if (options.opened) {
      options.onOpen?.();
    }
  }, [options.opened]);

  return {
    opened: options.opened,
    payload,
    onClose,
    onOpen,
  };
}
