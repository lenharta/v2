import * as React from 'react';
import { DropdownTargetProps, useDropdownCTX } from '../context';
import clsx from 'clsx';

export const DropdownTarget = React.forwardRef<HTMLElement, DropdownTargetProps>((props, ref) => {
  const { children, ...otherProps } = props;

  const ctx = useDropdownCTX();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!ctx.isOpen) {
      otherProps.onClick?.(e);
      ctx.onOpenChange?.(true);
      ctx.onOpen?.();
    } else {
      otherProps.onClick?.(e);
      ctx.onOpenChange?.(false);
      ctx.onClose?.();
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!ctx.isOpen) {
      otherProps.onKeyDown?.(e);
      ctx.onOpenChange?.(true);
      ctx.onOpen?.();
    } else {
      otherProps.onKeyDown?.(e);
      ctx.onOpenChange?.(false);
      ctx.onClose?.();
    }
  };

  const clxss = clsx(otherProps.className, 'Dropdown-target');

  return React.cloneElement(children, {
    ref,
    onClick: handleClick,
    onKeyDown: handleKeydown,
    className: clxss,
    ...otherProps,
  });
});
