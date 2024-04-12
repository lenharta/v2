export declare namespace Floating {
  export type Dir = 'ltr' | 'rtl';
  export type Side = 'top' | 'bottom' | 'right' | 'left';
  export type Align = 'start' | 'end';
  export type Width = 'target' | string | number | null;
  export type Strategy = 'absolute' | 'fixed';

  export type Placement = FloatingSide | `${FloatingSide}-${FloatingAlign}`;
  export type PlacementData = [FloatingSide, FloatingAlign];

  export interface Middleware {
    inline?: boolean | undefined;
    shift?: boolean | undefined;
    size?: boolean | undefined;
    flip?: boolean | undefined;
  }

  export interface OffsetAxis {
    mainAxis?: number | undefined;
    crossAxis?: number | undefined;
    alignAxis?: number | undefined;
  }

  export interface Payload {
    opened?: boolean;
    floating: {
      update: () => void;
      refs: {
        reference: React.MutableRefObject<any>;
        floating: React.MutableRefObject<any>;
      };
    };
    placementDependencies?: React.DependencyList | any[];
    placement: FloatingPlacement;
  }

  export interface Options {
    opened?: boolean | undefined;
    offset: number | FloatingAxis;
    placement: FloatingPlacement;
    width?: FloatingWidth | undefined;
    strategy?: FloatingStrategy | undefined;
    middleware?: FloatingMiddleware | undefined;
    placementDependencies?: React.DependencyList | any[] | undefined;
    onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
    onChange?: ((opened: boolean) => void) | undefined;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
  }
}
