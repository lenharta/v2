import * as React from 'react';
import { Placement } from '@/types/common';
import { mergeProps } from '@/utils';
import { PopoverTarget } from './Target';
import { PopoverFloating } from './Floating';
import { clientRectToRect, computeCoords } from './utils';
import { PopoverBehaviorMethod, PopoverProvider } from './context';

export interface PopoverData {
  isPositioned?: boolean;
  placement: Placement;
  x: number;
  y: number;
}

export interface PopoverStateOptions {
  onOpen?: () => void;
  onClose?: () => void;
  initialOpen?: boolean;
  behavior?: PopoverBehaviorMethod;
}

export interface PopoverProps extends PopoverStateOptions {
  children?: React.ReactNode;
  placement?: Placement;
}

const defaultProps: Partial<PopoverProps> = {
  placement: 'bottom',
  behavior: 'click',
};

type PopoverComponents = {
  Target: typeof PopoverTarget;
  Floating: typeof PopoverFloating;
};

export const Popover: React.FC<PopoverProps> & PopoverComponents = (props: PopoverProps) => {
  const { children, placement, initialOpen, behavior, onClose, onOpen } = props;

  const _props = mergeProps({ placement, behavior }, defaultProps);

  const [isOpen, setOpen] = React.useState<boolean>(initialOpen ?? false);

  const [data, setData] = React.useState<PopoverData>({
    placement: _props.placement!,
    x: 0,
    y: 0,
  });

  const targetRef = React.useRef<Element>(null);
  const floatingRef = React.useRef<HTMLElement>(null);

  const onChange = React.useCallback(() => {
    setOpen(isOpen ? false : true);
    return isOpen ? onClose?.() : onOpen?.();
  }, [isOpen]);

  React.useEffect(() => {
    const targetRect = clientRectToRect(targetRef.current?.getBoundingClientRect()!);
    const floatingRect = clientRectToRect(floatingRef.current?.getBoundingClientRect()!);
    const coords = computeCoords({ target: targetRect, floating: floatingRect }, _props.placement!);

    setData((currentState) => ({
      ...currentState,
      ...coords,
      isPositioned: true,
      placement: _props.placement!,
    }));

    console.log(data);
  }, [placement, isOpen]);

  return (
    <PopoverProvider
      value={{
        isOpen,
        onChange,
        behavior: _props.behavior!,
        placement: _props.placement!,
        targetRef,
        floatingRef,
        x: data.x,
        y: data.y,
      }}
    >
      {children}
    </PopoverProvider>
  );
};

Popover.displayName = '@v2/Popover';
Popover.Floating = PopoverFloating;
Popover.Target = PopoverTarget;
