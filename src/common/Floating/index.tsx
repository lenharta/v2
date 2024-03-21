import * as React from 'react';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { useFloating } from './utils/use-floating';
import { FloatingProvider } from './context';
import { getFloatingPosition } from './utils';
import { FloatingTarget } from './Target';
import { FloatingBox } from './Box';
import {
  FloatingMiddleware,
  FloatingOffsetAxis,
  FloatingPosition,
  FloatingStrategy,
  FloatingWidth,
} from './types';

export interface FloatingProps {
  width?: FloatingWidth;
  opened?: boolean;
  zIndex?: string | number;
  offset?: number | FloatingOffsetAxis;
  children?: React.ReactNode;
  disabled?: boolean;
  strategy?: FloatingStrategy;
  position?: FloatingPosition;
  middleware?: FloatingMiddleware;
  closeOnOutsideClick?: boolean;
  positionDependencies?: React.DependencyList;
  onPositionChange?: (position: FloatingPosition) => void;
  onChange: (opened?: boolean) => void;
  onClose?: () => void;
  onOpen?: () => void;
}

const defaultProps: Partial<FloatingProps> = {
  width: 'max-content',
  offset: 8,
  zIndex: 300,
  position: 'bottom',
  middleware: { flip: true, shift: true, inline: false },
  strategy: 'absolute',
};

export type FloatingComponentType = React.FC<FloatingProps> & {
  Target: typeof FloatingTarget;
  Box: typeof FloatingBox;
};

export const Floating: FloatingComponentType = (props) => {
  const {
    width,
    zIndex,
    offset,
    opened,
    children,
    disabled,
    strategy,
    position,
    middleware,
    closeOnOutsideClick,
    onPositionChange,
    onChange,
    onClose,
    onOpen,
  } = mergeProps(defaultProps, props);

  const theme = useThemeCTX();
  const uid = React.useId();
  const dir = theme.state.dir;

  const [boxNode, setBoxNode] = React.useState<HTMLElement | null>(null);
  const [targetNode, setTargetNode] = React.useState<HTMLElement | null>(null);

  const ui = useFloating({
    opened,
    onOpen,
    onClose,
    onChange,
    onPositionChange,
    width,
    offset: offset!,
    strategy,
    position: getFloatingPosition(dir, position!),
    middleware,
  });

  const reference = React.useCallback(
    (node: HTMLElement) => {
      setTargetNode(node);
      ui.floating.refs.setReference(node);
    },
    [ui.floating.refs.setReference]
  );

  const floating = React.useCallback(
    (node: HTMLElement) => {
      setBoxNode(node);
      ui.floating.refs.setFloating(node);
    },
    [ui.floating.refs.setFloating]
  );

  return (
    <FloatingProvider
      value={{
        width: width,
        opened: ui.opened,
        zIndex: zIndex!,
        disabled: disabled,
        floating,
        reference,
        getTargetId: () => `${uid}target`,
        getBoxId: () => `${uid}box`,
        onToggle: ui.onToggle,
        onClose: ui.onClose,
        onChange,
        y: ui.floating.y!,
        x: ui.floating.x!,
        position: ui.floating.placement,
        strategy: ui.floating.strategy,
      }}
    >
      {children}
    </FloatingProvider>
  );
};

Floating.displayName = '@v2/Floating';
Floating.Target = FloatingTarget;
Floating.Box = FloatingBox;
