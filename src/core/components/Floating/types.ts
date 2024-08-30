import React from 'react';
import { TransitionProps } from '@/core';

type FloatingDir = 'ltr' | 'rtl';
type FloatingSide = 'bottom' | 'right' | 'left' | 'top';
type FloatingAlign = 'start' | 'end';
type FloatingWidth = 'target' | React.CSSProperties['width'] | null;
type FloatingStrategy = 'absolute' | 'fixed';
type FloatingPlacement = FloatingSide | `${FloatingSide}-${FloatingAlign}`;
type FloatingOffsetAxis = 'mainAxis' | 'crossAxis' | 'alignAxis';
type FloatingMiddlewareKey = 'inline' | 'shift' | 'size' | 'flip';

type FloatingOffsetAxisProps = { [Key in FloatingOffsetAxis]?: number | undefined };
type FloatingMiddlewareProps = { [Key in FloatingMiddlewareKey]?: boolean | undefined };

interface FloatingPlacementProps {
  value: FloatingPlacement;
  onChange?: ((placement: FloatingPlacement) => void) | undefined;
  dependencies?: React.DependencyList | any[] | undefined;
}

interface FloatingProps {
  dir?: FloatingDir;
  isOpen: boolean;
  zIndex?: number | undefined;
  children: React.ReactNode;
  behavior?: 'click' | 'hover' | undefined;
  disabled?: boolean | undefined;
  placement?: FloatingPlacement | undefined;
  placementDependencies?: React.DependencyList | any[] | undefined;
  onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
  closeOnClickOutside?: boolean | undefined;
  clickOutsideIgnoreRefs?: React.RefObject<HTMLElement>[] | undefined;
  closeOnEscape?: boolean | undefined;
  transitionProps?: Partial<TransitionProps> | undefined;
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
  width: FloatingWidth;
  zIndex: number;
  isOpen: boolean;
  behavior: 'click' | 'hover';
  disabled?: boolean | undefined;
  placement: FloatingPlacement;
  placementDependencies?: React.DependencyList | any[] | undefined;
  onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
  transitionProps?: Partial<TransitionProps> | undefined;
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
  FloatingDir,
  FloatingSide,
  FloatingAlign,
  FloatingWidth,
  FloatingStrategy,
  FloatingPlacement,
  FloatingOffsetAxis,
  FloatingMiddlewareKey,
  FloatingOffsetAxisProps,
  FloatingMiddlewareProps,
  FloatingPlacementProps,
  FloatingProps,
  FloatingContext,
  FloatingTargetProps,
  FloatingBoxProps,
  UseFloatingConfig,
  UseFloatingOptions,
};
