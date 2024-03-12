import * as React from 'react';
import { Coords, Placement } from '@/types/common';

export type PopoverBehaviorMethod = 'hover' | 'click';

export interface PopoverContextValue {
  isOpen: boolean;
  onChange: () => void;
  placement: Placement;
  targetRef: React.RefObject<Element>;
  floatingRef: React.RefObject<HTMLElement>;
  behavior: PopoverBehaviorMethod;
  // floatingStyles: { left: number; top: number };
  x: number;
  y: number;
}

export const PopoverContext = React.createContext({} as PopoverContextValue);
export const PopoverProvider = PopoverContext.Provider;
export const usePopoverCTX = () => React.useContext(PopoverContext);
