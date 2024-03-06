import * as React from 'react';
import { Placement, UseFloatingReturn, autoUpdate, useFloating } from '@floating-ui/react';
import { FloatingMiddlewares, getFloatingMiddlewares } from '../get-floating-middlewares';
import { useDidUpdate } from '@/hooks';

export function useDropdown(options: {
  isOpen: boolean;
  offset: number;
  placement: Placement;
  middlewares: FloatingMiddlewares;
  placementDependencies?: React.DependencyList;
  onPlacementChange?: (placement: Placement) => void;
  onChange?: (isOpen: boolean) => void;
}): {
  floating: UseFloatingReturn;
} {
  const [delayUpdate, setDelayUpdate] = React.useState(0);

  const floating = useFloating({
    placement: options.placement,
    middleware: [...getFloatingMiddlewares(options)],
  });

  React.useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return undefined;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    options.placement,
    options.isOpen,
    delayUpdate,
  ]);

  useDidUpdate(() => {
    floating.update();
  }, options.placementDependencies);

  useDidUpdate(() => {
    setDelayUpdate((count) => count + 1);
  }, [options.isOpen]);

  useDidUpdate(() => {
    options.onPlacementChange?.(floating.placement);
  }, [floating.placement]);

  useDidUpdate(() => {
    options.onChange?.(options.isOpen);
  }, [options.isOpen]);

  return { floating };
}
