import { Core } from '@/types';
import { useDidUpdate } from '@/hooks';
import { useFloatingUpdate } from '@/core/hooks';
import { getFloatingMiddleware } from '@/core/utils';
import { UseFloatingReturn, useFloating as useFloatingUI } from '@floating-ui/react';

export function useFloating(options: Core.FloatingOptions) {
  const onClose = () => {
    if (options.opened) {
      options.onClose?.();
      options.onChange?.(false);
    }
  };

  const onToggle = () => {
    if (options.opened) {
      options.onChange?.(false);
      options.onClose?.();
    } else {
      options.onChange?.(true);
      options.onOpen?.();
    }
  };

  const floating: UseFloatingReturn<Element> = useFloatingUI({
    strategy: options.strategy,
    placement: options.position,
    middleware: getFloatingMiddleware(options, () => floating),
  });

  useFloatingUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating,
  });

  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);

  useDidUpdate(() => {
    if (!options.opened) {
      options.onClose?.();
    } else {
      options.onOpen?.();
    }
  }, [options.opened]);

  return {
    floating,
    opened: options.opened,
    onClose,
    onToggle,
  };
}
