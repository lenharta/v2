import * as React from 'react';
import { useDidUpdate } from '@hooks';
import { useFloating as useFloatingPayload, UseFloatingReturn } from '@floating-ui/react';
import { UseFloatingOptions } from '../types';
import { useFloatingUpdate } from '../use-floating-update';
import { getFloatingMiddleware } from '../get-floating-middleware';

const useFloatingElement = <E extends Element = Element>(options: UseFloatingOptions) => {
  const onClose = React.useCallback(() => {
    if (options.open) {
      options.onChange?.(false);
      options.onClose?.();
    }
  }, [options.open, options.onChange, options.onClose]);

  const onChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        options.onOpen?.();
        options.onChange(true);
      }
      if (open) {
        options.onChange?.(false);
        options.onClose?.();
      }
    },
    [options.onChange, options.onClose, options.onOpen]
  );

  const payload: UseFloatingReturn<E> = useFloatingPayload({
    strategy: options.strategy,
    placement: options.placement,
    middleware: getFloatingMiddleware(options, () => payload as any),
  });

  useFloatingUpdate({
    open: options.open,
    floating: payload,
    placement: options.placement,
    onPlacementChange: options.onPlacementChange,
    placementDependencies: options.placementDependencies,
  });

  useDidUpdate(() => {
    options.onPlacementChange?.(payload.placement);
  }, [payload.placement]);

  useDidUpdate(() => {
    if (!options.open) {
      options.onClose?.();
    }
    if (options.open) {
      options.onOpen?.();
    }
  }, [options.open]);

  return {
    open: options.open,
    payload,
    onChange,
    onClose,
  };
};

export { useFloatingElement };
