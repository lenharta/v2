import React from 'react';
import { Core } from '@/types';
import { FloatingBox } from './FloatingBox';
import { FloatingTarget } from './FloatingTarget';
import { FloatingProvider, FloatingType, ReferenceType } from './context';
import { FloatingCoords, FloatingElementRects, FloatingPlacement } from './types';
import { getAlignment, getSide, roundByDPR } from './utils';

interface FloatingProps {
  isOpen: boolean;
  onOpen?: (() => void) | undefined;
  onClose?: (() => void) | undefined;
  onChange: (isOpen: boolean) => void;
  placement?: FloatingPlacement | undefined;
  strategy?: 'absolute' | 'fixed';
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  transitionProps?: Partial<Core.TransitionProps> | undefined;
}

type FloatingComponent = React.FC<FloatingProps> & {
  Target: typeof FloatingTarget;
  Box: typeof FloatingBox;
};

interface ComputeFloatingPositionProps {
  rects: FloatingElementRects;
  placement: FloatingPlacement;
}

const computeCoords = (props: ComputeFloatingPositionProps) => {
  const { rects, placement } = props;
  const { floating, reference } = rects;

  const side = getSide(placement);
  const alignAxis = getAlignment;

  const commonX = floating.x + floating.width / 2 - reference.width / 2;
  const commonY = floating.y + floating.height / 2 - reference.height / 2;

  let coords: FloatingCoords = { x: 0, y: 0 };

  if (side === 'top') {
    coords = { x: commonX, y: reference.y - floating.height };
  }
  if (side === 'bottom') {
    coords = { x: commonX, y: reference.y + reference.height };
  }
  if (side === 'right') {
    coords = { x: reference.x + reference.width, y: commonY };
  }
  if (side === 'left') {
    coords = { x: reference.x - floating.width, y: commonY };
  }

  return coords;
};

const Floating: FloatingComponent = (props) => {
  const {
    isOpen,
    onOpen,
    onClose,
    onChange,
    children,
    strategy = 'absolute',
    placement = 'top',
    transitionProps = {
      duration: 150,
      transition: {
        transitionProperty: 'opacity',
        out: { opacity: 0 },
        in: { opacity: 1 },
      },
    },
  } = props;

  const uid = React.useId();
  const floatingRef = React.useRef<HTMLDivElement>(null);
  const referenceRef = React.useRef<HTMLElement>(null);

  const createTargetId = () => `floating${uid}target`;
  const createBoxId = () => `floating${uid}box`;

  const handleChange = React.useCallback(() => {
    if (isOpen === false) {
      onChange(true);
      onOpen?.();
    }
    if (isOpen === true) {
      onChange(false);
      onClose?.();
    }
  }, [isOpen, onOpen, onClose]);

  return (
    <FloatingProvider
      value={{
        refs: {
          floating: floatingRef,
          reference: referenceRef,
        },
        isOpen,
        onChange: handleChange,
        getBoxId: createBoxId,
        getTargetId: createTargetId,
        transitionProps,
        floatingStyles: {},
        placement,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </FloatingProvider>
  );
};

Floating.Box = FloatingBox;
Floating.Target = FloatingTarget;
Floating.displayName = '@v2/Floating';
export { Floating, type FloatingProps };

// const floatingStyles = React.useMemo(() => {
//   const initialStyles: React.CSSProperties = {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//   };

//   if (!elements.floating) {
//     return initialStyles;
//   }

//   const floating = elements.floating.current!;
//   const reference = elements.reference.current!;

//   if (floating && reference) {
//     console.log(floating, reference);
//     const coords = computeCoords({
//       placement,
//       rects: {
//         floating: floating.getBoundingClientRect(),
//         reference: reference.getBoundingClientRect(),
//       },
//     });

//     const x = roundByDPR(floating, coords.x);
//     const y = roundByDPR(floating, coords.y);

//     return {
//       position: strategy,
//       left: x,
//       top: y,
//     };
//   }

//   return initialStyles;
// }, [strategy, elements.floating.current]);

// const [floatingNode, setFloatingNode] = React.useState<HTMLDivElement | null>(null);
// const [referenceNode, setReferenceNode] = React.useState<HTMLElement | null>(null);

// const setReference = React.useCallback((node: HTMLElement | null) => {
//   if (node !== referenceRef.current) {
//     referenceRef.current === node;
//     setReferenceNode(node);
//   }
// }, []);

// const setFloating = React.useCallback((node: HTMLDivElement | null) => {
//   if (node !== floatingRef.current) {
//     floatingRef.current === node;
//     setFloatingNode(node);
//   }
// }, []);

// const refs = React.useMemo(
//   () => ({
//     floating: floatingRef,
//     reference: referenceRef,
//     setReference,
//     setFloating,
//   }),
//   [setReference, setFloating]
// );

// const elements = React.useMemo(
//   () => ({ reference: referenceRef, floating: floatingRef }),
//   [referenceRef, floatingRef]
// );

// const defaultProps: Partial<FloatingProps> = {
//   width: 'max-content',
//   offset: 8,
//   zIndex: 999,
//   withRoles: true,
//   placement: 'bottom',
//   closeOnEscape: true,
//   closeOnClickOutside: true,
//   placementDependencies: [],
//   middlewares: { flip: true, shift: true, inline: false },
//   transitionProps: {
//     transition: defaultTransition,
//     duration: 150,
//   },
// };

// id?: string;
// defaultOpen?: boolean | undefined;
// withRoles?: boolean | undefined;
// offset?: number | Core.FloatingAxis;
// children: React.ReactNode;
// placement?: Core.FloatingPlacement | undefined;
// keepMounted?: boolean;
// transitionProps?: Partial<Core.TransitionProps> | undefined;
// placementDependencies?: any[];
// width?: Core.FloatingWidth | undefined;
// zIndex?: string | number | undefined;
// disabled?: boolean | undefined;
// strategy?: Core.FloatingStrategy | undefined;
// middlewares?: Core.FloatingMiddleware | undefined;
// closeOnClickOutside?: boolean;
// closeOnEscape?: boolean;
// isOpen: boolean;
// onOpen?: (() => void) | undefined;
// onClose?: (() => void) | undefined;
// onChange: (isOpen: boolean) => void;
// onPlacementChange?: ((placement: Core.FloatingPlacement) => void) | undefined;
