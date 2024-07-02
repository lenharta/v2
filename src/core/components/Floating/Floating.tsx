import * as React from 'react';
import { useClickOutside, useEventListener } from '@/hooks';
import { TransitionProps } from '@/core';
import { FloatingBox } from './FloatingBox';
import { FloatingProps } from './types';
import { FloatingTarget } from './FloatingTarget';
import { FloatingProvider } from './context';
import { useFloatingElement } from './use-floating-element';
import { getFloatingPlacement } from './get-floating-placement';

type FloatingFactory = React.FC<FloatingProps> & {
  Target: typeof FloatingTarget;
  Box: typeof FloatingBox;
};

const Floating: FloatingFactory = (props) => {
  const {
    dir = 'ltr',
    width = 'max-content',
    offset = 0,
    zIndex = 300,
    isOpen,
    children,
    disabled,
    strategy = 'absolute',
    placement = 'bottom',
    middleware = { flip: true, shift: true, inline: false },
    transitionProps,
    closeOnEscape = true,
    closeOnClickOutside = true,
    clickOutsideIgnoreRefs,
    placementDependencies,
    onPlacementChange,
    onChange,
    onClose,
    onOpen,
  } = props;

  const uid = React.useId();
  const createBoxId = () => `floating${uid}box`;
  const createTargetId = () => `floating${uid}target`;

  const floating = useFloatingElement({
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

  useClickOutside(
    [
      ...(clickOutsideIgnoreRefs ? clickOutsideIgnoreRefs : []),
      floating.payload.refs.floating as React.RefObject<HTMLElement>,
      floating.payload.refs.reference as React.RefObject<HTMLElement>,
    ],
    () => closeOnClickOutside && floating.onClose(),
    'mousedown'
  );

  useEventListener('keydown', (event: any) => {
    if (event?.code === 'Escape') {
      closeOnEscape && floating.onClose();
    }
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

  const transition: Partial<TransitionProps> = !transitionProps
    ? {
        duration: 159,
        transition: {
          transitionProperty: 'opacity',
          out: { opacity: 0 },
          in: { opacity: 1 },
        },
      }
    : transitionProps;

  return (
    <React.Fragment>
      <FloatingProvider
        value={{
          x: floating.payload.x!,
          y: floating.payload.y!,
          width,
          zIndex,
          isOpen,
          disabled,
          closeOnEscape,
          closeOnClickOutside,
          placementDependencies,
          transitionProps: { mounted: isOpen, ...transition },
          placement: floating.payload.placement,
          getBoxId: createBoxId,
          getTargetId: createTargetId,
          reference: referenceRef,
          floating: floatingRef,
          onPlacementChange,
          onChange: floating.onChange,
          onClose: floating.onClose,
        }}
      >
        {children}
      </FloatingProvider>
    </React.Fragment>
  );
};

Floating.Box = FloatingBox;
Floating.Target = FloatingTarget;
Floating.displayName = '@v2/Floating.Root';
export { Floating };
