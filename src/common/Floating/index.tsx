import * as React from 'react';
import { FloatingMiddleware, FloatingOffsetAxis, FloatingPosition, FloatingWidth } from './types';
import { FloatingProvider } from './context';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';

export interface FloatingProps {
  opened?: boolean;
  onChange?: (opened?: boolean) => void;
  zIndex?: string | number;
  offset?: FloatingOffsetAxis;
  position?: FloatingPosition;
  onPositionChange?: (position: FloatingPosition) => void;
  positionDependencies?: React.DependencyList;
  onClose?: () => void;
  onOpen?: () => void;
  width?: FloatingWidth;
  middleware?: FloatingMiddleware;
  children?: React.ReactNode;
}

const defaultProps: Partial<FloatingProps> = {
  width: 'target',
  position: 'bottom',
  zIndex: 300,
};

export function Floating(_props: FloatingProps) {
  const { children, opened, onChange, onOpen, onClose, zIndex, position, width } = _props;
  const props = mergeProps({ zIndex, position, width }, defaultProps);

  const onToggle = React.useCallback(() => {
    if (opened) {
      onChange?.(false);
      onClose?.();
    } else {
      onChange?.(true);
      onOpen?.();
    }
  }, [onClose, onOpen]);

  const theme = useThemeCTX();
  const [boxNode, setBoxNode] = React.useState<HTMLElement | null>(null);
  const [targetNode, setTargetNode] = React.useState<HTMLElement | null>(null);
  const direction = theme.state.dir;

  const getBoxId = () => '';
  const getTargetId = () => '';

  return (
    <FloatingProvider
      value={{
        opened,
        onChange,
        onToggle,
        getBoxId,
        getTargetId,
        width: props.width!,
        zIndex: props.zIndex!,
        position: props.position!,
      }}
    >
      {children}
    </FloatingProvider>
  );
}
