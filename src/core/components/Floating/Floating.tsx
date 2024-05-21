import React from 'react';
import { FloatingBox } from './FloatingBox';
import { FloatingProps } from './Floating.types';
import { FloatingTarget } from './FloatingTarget';
import { FloatingProvider } from './Floating.context';
import { useFloating } from './hooks';

type FloatingFactory = React.FC<FloatingProps> & {
  Target: typeof FloatingTarget;
  Box: typeof FloatingBox;
};

const Floating: FloatingFactory = (props) => {
  const {
    width = 'max-content',
    offset = 0,
    isOpen,
    children,
    disabled,
    strategy = 'absolute',
    placement = 'bottom',
    middleware = { flip: true, shift: true, inline: false },
    transitionProps,
    placementDependencies,
    onPlacementChange,
    onChange,
    onClose,
    onOpen,
  } = props;

  const [targetNode, setTargetNode] = React.useState<HTMLElement | null>(null);
  const [dropdownNode, setDropdownNode] = React.useState<HTMLElement | null>(null);

  const uid = React.useId();
  const createBoxId = () => `floating${uid}box`;
  const createTargetId = () => `floating${uid}target`;

  const floating = useFloating({
    open: isOpen,
    width,
    offset,
    strategy,
    middleware,
    placement,
    placementDependencies,
    onPlacementChange,
    onChange,
    onClose,
    onOpen,
  });

  const referenceRef = React.useCallback(
    (node: HTMLElement) => {
      setTargetNode(node);
      floating.payload.refs.setReference(node);
    },
    [floating.payload.refs.setReference]
  );

  const floatingRef = React.useCallback(
    (node: HTMLElement) => {
      setDropdownNode(node);
      floating.payload.refs.setFloating(node);
    },
    [floating.payload.refs.setFloating]
  );

  return (
    <React.Fragment>
      <FloatingProvider
        value={{
          isOpen,
          width,
          disabled,
          onChange: floating.onChange,
          floating: floatingRef,
          reference: referenceRef,
          getBoxId: createBoxId,
          getTargetId: createTargetId,
          x: floating.payload.x!,
          y: floating.payload.y!,
          placement: floating.payload.placement,
          onPlacementChange,
          placementDependencies,
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
