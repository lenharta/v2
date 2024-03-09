import * as React from 'react';
import { Dimensions, Placement } from '@/types/common';
import { isHTMLElement, mergeProps } from '@/utils';
import { PopoverTarget } from './Target';
import { PopoverFloating } from './Floating';
import { clientRectToRect, computeCoords, getComputedStyle, getCssDimension } from './utils';
import { PopoverBehaviorMethod, PopoverProvider } from './context';

export interface PopoverData {
  placement: Placement;
  isPositioned?: boolean;
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

  const [data, setData] = React.useState<PopoverData>({
    placement: 'right',
    x: 0,
    y: 0,
  });

  const _props = mergeProps({ placement, behavior }, defaultProps);
  const [isOpen, setOpen] = React.useState<boolean>(initialOpen ?? false);

  const [_target, _setTarget] = React.useState<Element | null>(null);
  const [_floating, _setFloating] = React.useState<HTMLElement | null>(null);

  const targetRef = React.useRef<Element>(null);
  const floatingRef = React.useRef<HTMLElement>(null);

  const onChange = React.useCallback(() => {
    setOpen(isOpen ? false : true);
    return isOpen ? onClose?.() : onOpen?.();
  }, []);

  const setFloating = React.useCallback((node: HTMLElement | null) => {
    if (node !== floatingRef.current) {
      floatingRef.current == node;
      _setFloating(node);
    }
  }, []);

  const setTarget = React.useCallback((node: Element | null) => {
    if (node !== targetRef.current) {
      targetRef.current == node;
      _setTarget(node);
    }
  }, []);

  const update = React.useCallback(() => {
    if (!targetRef.current || !floatingRef.current) {
      return;
    }
  }, [isOpen]);

  React.useEffect(() => {
    const target = targetRef.current!;
    const floating = floatingRef.current!;

    const targetRect = target.getBoundingClientRect()!;
    const floatingRect = floating.getBoundingClientRect()!;

    const targetDimensions = getCssDimension(target);
    const floatingDimensions = getCssDimension(floating);

    console.log('targetDimensions', targetDimensions);
    console.log('floatingDimensions', floatingDimensions);

    setData((current) => ({
      ...current,
      ...computeCoords(
        { target: clientRectToRect(targetRect), floating: clientRectToRect(floatingRect) },
        current.placement
      ),
    }));
  }, [isOpen]);
  console.log(data);

  return (
    <PopoverProvider
      value={{
        isOpen,
        onChange,
        behavior: _props.behavior!,
        placement: _props.placement!,
        floatingRef,
        targetRef,
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
