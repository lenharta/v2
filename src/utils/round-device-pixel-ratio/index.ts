import { getDevicePixelRatio } from '../get-device-pixel-ratio';

export const roundDevicePixelRatio = (element: Element, value: number) => {
  const dpr = getDevicePixelRatio(element);
  return Math.round(value * dpr) / dpr;
};
