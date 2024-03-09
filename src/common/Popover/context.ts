import * as React from 'react';
import { Placement } from './types';

export type PopoverBehaviorMethod = 'hover' | 'click';

export interface PopoverContextValue {
  isOpen: boolean;
  onChange: () => void;
  placement: Placement;
  targetRef: React.Ref<Element>;
  floatingRef: React.Ref<HTMLElement>;
  behavior: PopoverBehaviorMethod;
  x: number;
  y: number;
}

export const PopoverContext = React.createContext({} as PopoverContextValue);
export const PopoverProvider = PopoverContext.Provider;
export const usePopoverCTX = () => React.useContext(PopoverContext);
