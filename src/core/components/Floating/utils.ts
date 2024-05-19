import {
  FloatingAlign,
  FloatingAxis,
  FloatingClientRect,
  FloatingLength,
  FloatingPlacement,
  FloatingRect,
  FloatingSide,
} from './types';

const min = Math.min;

const max = Math.max;

const round = Math.round;

const floor = Math.floor;

const createCoords = (v: number) => ({ x: v, y: v });

const getSide = (placement: FloatingPlacement): FloatingSide => {
  return placement.split('-')[0] as FloatingSide;
};

const getAlignment = (placement: FloatingPlacement): FloatingAlign | undefined => {
  return placement.split('-')[1] as FloatingAlign | undefined;
};

const getOppositeAxis = (axis: FloatingAxis): FloatingAxis => {
  return axis === 'x' ? 'y' : 'x';
};

const getAxisLength = (axis: FloatingAxis): FloatingLength => {
  return axis === 'y' ? 'height' : 'width';
};

const getSideAxis = (placement: FloatingPlacement): FloatingAxis => {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
};

const rectToClientRect = (rect: FloatingRect): FloatingClientRect => {
  const { x, y, width, height } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y,
  };
};

const getDPR = (element: Element): number => {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
};

const roundByDPR = (element: Element, value: number) => {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
};

export {
  min,
  max,
  round,
  floor,
  createCoords,
  rectToClientRect,
  getSide,
  getAlignment,
  getOppositeAxis,
  getAxisLength,
  getSideAxis,
  roundByDPR,
  getDPR,
};
