import { Core } from '@/types';
import { createSafeContext } from '@/core/utils';

type FloatingContextValue = {
  // x: number;
  // y: number;
  // open: boolean;
  // width?: Core.FloatingWidth | undefined;
  // zIndex?: string | number | undefined;
  // variant?: string | undefined;
  // disabled?: boolean | undefined;
  // placement: Core.FloatingPlacement;
  // withRoles?: boolean | undefined;
  // keepMounted?: boolean | undefined;
  // closeOnEscape?: boolean | undefined;
  // targetProps: Record<string, any>;
  // getDropdownId: () => string;
  // getTargetId: () => string;
  // reference: (node: HTMLElement) => void;
  // floating: (node: HTMLElement) => void;
  // onToggle: () => void | undefined;
  // onClose?: () => void | undefined;
};

const [FloatingProvider, useFloatingContext] = createSafeContext<FloatingContextValue>(
  'Popover component was not found in the tree'
);

export { FloatingProvider, useFloatingContext, type FloatingContextValue };
