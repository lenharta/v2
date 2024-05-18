import React from 'react';
import { FloatingProvider } from './context';
import { Core } from '@/types';

interface FloatingProps {
  id?: string;
  withRoles?: boolean | undefined;
  offset?: number | Core.FloatingAxis;
  children: React.ReactNode;
  placement?: Core.FloatingPlacement | undefined;
  keepMounted?: boolean;
  transitionProps?: Partial<Core.TransitionProps> | undefined;
  placementDependencies?: any[];
  width?: Core.FloatingWidth | undefined;
  zIndex?: string | number | undefined;
  disabled?: boolean | undefined;
  floatingStrategy?: Core.FloatingStrategy | undefined;
  middlewares?: Core.FloatingMiddleware | undefined;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  opened?: boolean | undefined;
  onOpen?: (() => void) | undefined;
  onClose?: (() => void) | undefined;
  onChange?: (opened: boolean) => void;
  onPlacementChange?: ((placement: Core.FloatingPlacement) => void) | undefined;
}

const defaultTransition: Core.TransitionStyle = {
  transitionProperty: 'opacity',
  out: { opacity: 0 },
  in: { opacity: 1 },
};

const defaultProps: Partial<FloatingProps> = {
  width: 'max-content',
  offset: 8,
  zIndex: 999,
  withRoles: true,
  placement: 'bottom',
  closeOnEscape: true,
  closeOnClickOutside: true,
  placementDependencies: [],
  middlewares: { flip: true, shift: true, inline: false },
  transitionProps: {
    transition: defaultTransition,
    duration: 150,
  },
};

const Floating: React.FC<FloatingProps> = (props) => {
  const {
    children,
    disabled,
    floatingStrategy,
    keepMounted,
    middlewares,
    offset,
    onClose,
    onOpen,
    onPlacementChange,
    placement,
    placementDependencies,
    transitionProps,
    width,
    zIndex,
  } = props;

  const [boxNode, setboxNode] = React.useState<HTMLElement | null>(null);
  const [targetNode, setTargetNode] = React.useState<HTMLElement | null>(null);

  return (
    <FloatingProvider value={{}}>
      <React.Fragment>{children}</React.Fragment>
    </FloatingProvider>
  );
};

export { Floating };
