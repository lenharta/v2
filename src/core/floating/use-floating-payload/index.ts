import { Core } from '@/types';
import { useDidUpdate } from '@/hooks';
import { UseFloatingReturn, useFloating } from '@floating-ui/react';
import { useFloatingUpdate, getFloatingMiddleware } from '@/core/floating';

function useFloatingPayload<E extends Element = Element>(options: Core.FloatingOptions) {
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

export { useFloatingPayload };
