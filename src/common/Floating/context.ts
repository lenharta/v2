import { Placement } from '@/types/common';
import { createSafeContext } from '../utils';
import { FloatingPosition, FloatingWidth } from './types';

export type FloatingContextValue = {
  x: number;
  y: number;
  width?: FloatingWidth;
  zIndex?: string | number;
  opened?: boolean;
  disabled?: boolean;
  position: FloatingPosition;
  onClose?: () => void;
  onChange?: (opened: boolean) => void;
  floating: (node: HTMLElement) => void;
  reference: (node: HTMLElement) => void;
  getBoxId: () => string;
  getTargetId: () => string;
};

export const [FloatingProvider, useFloatingCTX] = createSafeContext<FloatingContextValue>(
  '[@v2/Floating]: Error context element not found in tree.'
);
