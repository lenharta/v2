import * as React from 'react';
import { ElementProps, ExoticRender } from '@/types';

export type FloatingSide = 'top' | 'left' | 'right' | 'bottom';
export type FloatingPlacement = 'end' | 'start';
export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
export type FloatingStrategy = 'absolute' | 'fixed';

export type FloatingWidth = 'target' | React.CSSProperties['width'] | null;

export interface FloatingOffsetAxis {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}

export interface FloatingMiddleware {
  flip: boolean;
  shift: boolean;
  inline?: boolean;
  size?: boolean;
}

export interface FloatingTargetProps {
  refProp?: string;
  children: React.ReactElement;
  popupType?: React.AriaAttributes['aria-haspopup'];
}

export type FloatingTargetComponentRender<
  T extends React.ElementType,
  E extends HTMLElement,
> = ExoticRender<E, ElementProps<T> & FloatingTargetProps>;
