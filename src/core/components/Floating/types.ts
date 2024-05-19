type FloatingAxis = 'x' | 'y';
type FloatingSide = 'top' | 'left' | 'right' | 'bottom';
type FloatingAlign = 'start' | 'end';
type FloatingWidth = 'target' | React.CSSProperties['width'] | null;
type FloatingLength = 'height' | 'width';
type FloatingRect = FloatingCoords & FloatingDimensions;
type FloatingCoords = { [Key in FloatingAxis]: number };
type FloatingDimensions = { [Key in FloatingLength]: number };
type FloatingPlacementAlign = `${FloatingSide}-${FloatingAlign}`;
type FloatingPlacement = FloatingSide | FloatingPlacementAlign;
type FloatingSideObject = { [key in FloatingSide]: number };
type FloatingPadding = number | Partial<FloatingSideObject>;
type FloatingClientRect = FloatingRect & FloatingSideObject;

interface FloatingElementRects {
  reference: FloatingRect;
  floating: FloatingRect;
}

interface FloatingOptions {}

interface FloatingContextValue {}

export type {
  FloatingAxis,
  FloatingSide,
  FloatingAlign,
  FloatingWidth,
  FloatingLength,
  FloatingRect,
  FloatingCoords,
  FloatingDimensions,
  FloatingPlacementAlign,
  FloatingPlacement,
  FloatingSideObject,
  FloatingPadding,
  FloatingClientRect,
  FloatingOptions,
  FloatingContextValue,
  FloatingElementRects,
};
