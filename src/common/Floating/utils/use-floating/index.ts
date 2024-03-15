import * as React from 'react';
import { useDidUpdate } from '@/hooks';
import { useFloatingUpdate } from '../use-floating-update';
import { getFloatingMiddleware } from '../get-floating-middleware';
import { useFloating as useFloatingUI, UseFloatingReturn } from '@floating-ui/react';

import {
  FloatingMiddleware,
  FloatingOffsetAxis,
  FloatingPosition,
  FloatingStrategy,
  FloatingWidth,
} from '../../types';

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
