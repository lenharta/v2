import {
  size,
  flip,
  shift,
  offset,
  inline,
  limitShift,
  useFloating as useFloatingUI,
  UseFloatingReturn,
} from '@floating-ui/react';

import {
  FloatingMiddleware,
  FloatingOffsetAxis,
  FloatingPosition,
  FloatingStrategy,
  FloatingWidth,
} from '../../types';
import { getFloatingMiddleware } from '../get-floating-middleware';
import React from 'react';
import { useDidUpdate } from '@/hooks';

export interface UseFloatingOptions {
  position: FloatingPosition;
  opened?: boolean;
  onChange?: (opened: boolean) => void;
  offset: number | FloatingOffsetAxis;
  width?: FloatingWidth;
  strategy?: FloatingStrategy;
  middleware?: FloatingMiddleware;
  positionDependencies?: React.DependencyList | any[];
  onPositionChange?: (position: FloatingPosition) => void;
  onClose?: () => void;
  onOpen?: () => void;
}

export function useFloating(options: UseFloatingOptions) {
  const onClose = () => {
    if (options.opened) {
      options.onClose?.();
      options.onChange?.(false);
    }
  };

  const onToggle = React.useCallback(() => {
    if (options.opened) {
      options.onChange?.(false);
      options.onClose?.();
    } else {
      options.onChange?.(true);
      options.onOpen?.();
    }
  }, [options.onClose, options.onOpen]);

  const floating: UseFloatingReturn<Element> = useFloatingUI({
    strategy: options.strategy,
    placement: options.position,
    middleware: getFloatingMiddleware(options, () => floating),
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
    controlled: typeof options.opened === 'boolean',
    opened: options.opened,
    onClose,
    onToggle,
  };
}
