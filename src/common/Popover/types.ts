import * as React from 'react';
import { Coords, Placement, Rect } from '@/types/common';

export interface ElementRects {
  target: Rect;
  floating: Rect;
}

export interface ComputePositionConfig {
  placement?: Placement;
}

export interface ComputePositionReturn extends Coords {
  placement: Placement;
}

export type ComputePosition = (
  target: unknown,
  floating: unknown,
  config: ComputePositionConfig
) => Promise<ComputePositionReturn>;

export type PopoverTargetBaseProps<
  T extends React.ElementType,
  E extends Element,
> = React.ComponentPropsWithoutRef<T> & React.RefAttributes<E>;

export type PopoverTargetProps = {
  children: React.ReactElement;
  refProp?: string;
};

// export type PopoverTargetRender<T extends React.ElementType, E extends Element> = (
//   props: PopoverTargetBaseProps<T, E> & PopoverTargetProps,
//   ref: React.ForwardedRef<E>
// ) => React.ReactElement;

// export type PopoverTargetExoticComponent<T extends React.ElementType, E extends Element> = (
//   props: PopoverTargetBaseProps<T, E> & PopoverTargetProps
// ) => React.ReactElement;

// export interface PopoverTargetComponent<
//   T extends React.ElementType = any,
//   E extends Element = Element,
// > {
//   (render: PopoverTargetRender<T, E>): PopoverTargetExoticComponent<T, E>;
//   displayName?: string;
// }
