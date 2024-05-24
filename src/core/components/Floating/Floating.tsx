import React from 'react';
import { useFloating } from './hooks';
import { FloatingBox } from './FloatingBox';
import { FloatingProps } from './Floating.types';
import { FloatingTarget } from './FloatingTarget';
import { FloatingProvider } from './Floating.context';
import { useEventListener } from '@/hooks';
import { getFloatingPlacement } from './utils';

type FloatingFactory = React.FC<FloatingProps> & {
  Target: typeof FloatingTarget;
  Box: typeof FloatingBox;
};

const Floating: FloatingFactory = (props) => {
  const {
    dir = 'ltr',
    width = 'max-content',
    offset = 0,
    isOpen,
    children,
    disabled,
    strategy = 'absolute',
    placement = 'bottom',
    middleware = { flip: true, shift: true, inline: false },
    transitionProps,
    closeOnClickOutside = true,
    placementDependencies,
    onPlacementChange,
    onChange,
    onClose,
    onOpen,
  } = props;

  const uid = React.useId();
  const createBoxId = () => `floating${uid}box`;
  const createTargetId = () => `floating${uid}target`;

  const floating = useFloating({
    open: isOpen,
    width,
    offset,
    strategy,
    middleware,
    placement: getFloatingPlacement(dir, placement!),
    placementDependencies,
    onPlacementChange,
    onChange,
    onClose,
    onOpen,
  });

  const referenceRef = React.useCallback(
    (node: HTMLElement) => {
      floating.payload.refs.setReference(node);
    },
    [floating.payload.refs.setReference]
  );

  const floatingRef = React.useCallback(
    (node: HTMLDivElement) => {
      floating.payload.refs.setFloating(node);
    },
    [floating.payload.refs.setFloating]
  );

  useEventListener(
    'mousedown',
    (event: any) => {
      const target = event.target as Node;

      if (!target || !target.isConnected) {
        return;
      }

      const floatingClickRef = floating.payload.refs.floating as React.RefObject<HTMLDivElement>;
      const referenceClickRef = floating.payload.refs.reference as React.RefObject<HTMLElement>;

      const floatingNode = floatingClickRef.current!;
      const referenceNode = referenceClickRef.current!;

      const isOutsideFloating = floatingNode && !floatingNode?.contains(target);
      const isOutsideReference = referenceNode && !referenceNode?.contains(target);

      if (!isOutsideFloating || !isOutsideReference) {
        return;
      }
      if (isOutsideFloating || isOutsideReference) {
        closeOnClickOutside && floating.onClose();
      }
    },
    undefined,
    {}
  );

  return (
    <React.Fragment>
      <FloatingProvider
        value={{
          width,
          isOpen,
          disabled,
          onClose: floating.onClose,
          onChange: floating.onChange,
          floating: floatingRef,
          reference: referenceRef,
          getBoxId: createBoxId,
          getTargetId: createTargetId,
          onPlacementChange,
          placement: floating.payload.placement,
          placementDependencies,
          closeOnClickOutside,
          x: floating.payload.x!,
          y: floating.payload.y!,
          transitionProps: {
            mounted: isOpen,
            duration: transitionProps?.duration || 150,
            transition: {
              in: transitionProps?.transition?.in || { opacity: 1 },
              out: transitionProps?.transition?.out || { opacity: 0 },
              common: transitionProps?.transition?.common || {},
              transitionProperty: transitionProps?.transition?.transitionProperty || 'opacity',
            },
          },
        }}
      >
        {children}
      </FloatingProvider>
    </React.Fragment>
  );
};

Floating.Box = FloatingBox;
Floating.Target = FloatingTarget;
Floating.displayName = '@v2/Floating';
export { Floating };
