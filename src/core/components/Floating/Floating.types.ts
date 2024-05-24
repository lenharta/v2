import React from 'react';
import { Core } from '@/types';

type FloatingDir = 'ltr' | 'rtl';
type FloatingSide = 'top' | 'bottom' | 'right' | 'left';
type FloatingAlign = 'start' | 'end';
type FloatingWidth = 'target' | React.CSSProperties['width'] | null;
type FloatingStrategy = 'absolute' | 'fixed';
type FloatingPlacement = FloatingSide | `${FloatingSide}-${FloatingAlign}`;
type FloatingMiddleware = 'inline' | 'shift' | 'size' | 'flip';
type FloatingOffsetAxis = 'mainAxis' | 'crossAxis' | 'alignAxis';

type FloatingOffsetAxisProps = { [Key in FloatingOffsetAxis]?: number | undefined };
type FloatingMiddlewareProps = { [Key in FloatingMiddleware]?: boolean | undefined };

interface FloatingPlacementProps {
  value: FloatingPlacement;
  onChange?: ((placement: FloatingPlacement) => void) | undefined;
  dependencies?: React.DependencyList | any[] | undefined;
}

interface FloatingProps {
  dir?: FloatingDir;
  isOpen: boolean;
  children: React.ReactNode;
  disabled?: boolean | undefined;
  placement?: FloatingPlacement | undefined;
  placementDependencies?: React.DependencyList | any[] | undefined;
  onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
  closeOnClickOutside?: boolean | undefined;
  closeOnEscape?: boolean | undefined;
  transitionProps?: Partial<Core.TransitionProps> | undefined;
  width?: FloatingWidth | undefined;
  offset?: number | FloatingOffsetAxisProps | undefined;
  strategy?: FloatingStrategy | undefined;
  middleware?: FloatingMiddlewareProps | undefined;
  onOpen?: (() => void) | undefined;
  onClose?: (() => void) | undefined;
  onChange: (isOpen: boolean) => void;
}

interface FloatingContext {
  x: number;
  y: number;
  width?: FloatingWidth | undefined;
  isOpen: boolean;
  disabled?: boolean | undefined;
  placement: FloatingPlacement;
  placementDependencies?: React.DependencyList | any[] | undefined;
  onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
  transitionProps?: Partial<Core.TransitionProps> | undefined;
  closeOnClickOutside: boolean;
  closeOnEscape: boolean;
  onClose: () => void;
  onChange: (isOpen: boolean) => void;
  getBoxId: () => string;
  getTargetId: () => string;
  reference: (node: HTMLElement) => void;
  floating: (node: HTMLDivElement) => void;
}

interface FloatingTargetProps {
  style?: React.CSSProperties | undefined;
  refProp?: string | undefined;
  popupType?: React.AriaAttributes['aria-haspopup'] | undefined;
  children: React.ReactElement;
}

interface FloatingBoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface UseFloatingConfig {
  open: boolean;
  placement: FloatingPlacement;
  placementDependencies?: React.DependencyList | any[] | undefined;
  onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
  floating: {
    update: () => void;
    refs: {
      reference: React.MutableRefObject<any>;
      floating: React.MutableRefObject<any>;
    };
  };
}

interface UseFloatingOptions {
  open: boolean;
  width?: FloatingWidth | undefined;
  offset: number | FloatingOffsetAxisProps;
  strategy?: FloatingStrategy | undefined;
  middleware?: FloatingMiddlewareProps | undefined;
  placement: FloatingPlacement;
  placementDependencies?: React.DependencyList | any[] | undefined;
  onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
  onChange: (isOpen: boolean) => void;
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

export type {
  FloatingSide,
  FloatingAlign,
  FloatingWidth,
  FloatingStrategy,
  FloatingPlacement,
  FloatingMiddleware,
  FloatingOffsetAxis,
  FloatingOffsetAxisProps,
  FloatingMiddlewareProps,
  FloatingProps,
  FloatingContext,
  FloatingBoxProps,
  FloatingTargetProps,
  UseFloatingConfig,
  UseFloatingOptions,
  FloatingPlacementProps,
};
