import * as React from 'react';
import { Core } from '@/types';
import { useFloating } from '../hooks';
import { useThemeState } from '@/store';
import { FloatingProvider } from './context';
import { getFloatingPosition } from '../utils';

import { FloatingBox } from './Box';
import { FloatingTarget } from './Target';

export type FloatingComponentType = React.FC<Core.FloatingProps> & {
  Target: typeof FloatingTarget;
  Box: typeof FloatingBox;
};

export const Floating: FloatingComponentType = (props) => {
  const {
    width = 'max-content',
    zIndex = 300,
    offset = 8,
    opened,
    children,
    disabled,
    position = 'bottom',
    strategy = 'absolute',
    middleware = { flip: true, shift: true, inline: false },
    closeOnOutsideClick,
    onPositionChange,
    onChange,
    onClose,
    onOpen,
  } = props;

  const theme = useThemeState();
  const uid = React.useId();
  const dir = theme.dir;

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