import React from 'react';
import { useDidUpdate } from '@/hooks';
import { UseFloatingOptions } from '../types';
import { useFloating as useFloatingPayload, UseFloatingReturn } from '@floating-ui/react';
import { getFloatingMiddleware } from '../get-floating-middleware';
import { useFloatingUpdate } from '../use-floating-update';

const useFloating = <E extends Element = Element>(opts: UseFloatingOptions) => {
  const onClose = React.useCallback(() => {
    if (opts.open) {
      opts.onChange?.(false);
      opts.onClose?.();
    }
  }, [opts.open, opts.onChange, opts.onClose]);

  const onChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        opts.onOpen?.();
        opts.onChange(true);
      }
      if (open) {
        opts.onChange?.(false);
        opts.onClose?.();
      }
    },
    [opts.onChange, opts.onClose, opts.onOpen]
  );

  const payload: UseFloatingReturn<E> = useFloatingPayload({
    strategy: opts.strategy,
    placement: opts.placement,
    middleware: getFloatingMiddleware(opts, () => payload as any),
  });

  useFloatingUpdate({
    open: opts.open,
    floating: payload,
    placement: opts.placement,
    onPlacementChange: opts.onPlacementChange,
    placementDependencies: opts.placementDependencies,
  });

  useDidUpdate(() => {
    opts.onPlacementChange?.(payload.placement);
  }, [payload.placement]);

  useDidUpdate(() => {
    if (!opts.open) {
      opts.onClose?.();
    }
    if (opts.open) {
      opts.onOpen?.();
    }
  }, [opts.open]);

  return {
    open: opts.open,
    payload,
    onChange,
    onClose,
  };
};

export { useFloating };
