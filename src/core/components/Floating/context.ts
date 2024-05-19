import { Core } from '@/types';
import { FloatingPlacement } from './types';
import { createSafeContext } from '@/core/utils';

type FloatingType = React.RefObject<HTMLDivElement>;
type ReferenceType = React.RefObject<HTMLElement>;

type FloatingContextValue = {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
  getBoxId: () => string;
  getTargetId: () => string;
  floatingStyles: React.CSSProperties;
  transitionProps?: Partial<Core.TransitionProps> | undefined;
  placement: FloatingPlacement;
  refs: {
    floating: React.RefObject<HTMLDivElement> | null;
    reference: React.RefObject<HTMLElement> | null;
    // setReference: (node: HTMLElement | null) => void;
    // setFloating: (node: HTMLDivElement | null) => void;
  };
};

const [FloatingProvider, useFloatingContext] = createSafeContext<FloatingContextValue>(
  'Popover component was not found in the tree'
);

export {
  FloatingProvider,
  useFloatingContext,
  type FloatingType,
  type ReferenceType,
  type FloatingContextValue,
};
