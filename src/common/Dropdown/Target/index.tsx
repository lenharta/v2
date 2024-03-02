import clsx from 'clsx';
import * as React from 'react';
import { useDropdownCTX } from '../context';
import { useMergeRefs } from '@/hooks';

export type DropdownTargetElementProps = React.ComponentPropsWithoutRef<any>;
export type DropdownTargetAttributeProps = React.RefAttributes<HTMLElement>;
export type DropdownTargetBaseProps = DropdownTargetElementProps & DropdownTargetAttributeProps;

export interface DropdownTargetProps extends DropdownTargetBaseProps {
  children: React.ReactElement;
}

export const _DropdownTarget = (
  props: DropdownTargetProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  const { children, className, ...otherProps } = props;

  const ctx = useDropdownCTX();
  const refs = useMergeRefs(ctx.targetRef, ref);
  const clxss = clsx('Dropdown-target', className);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    otherProps.onClick?.(event);
    ctx.onChange?.(ctx.isOpen ? false : true);
    ctx.onOpen?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    otherProps.onKeyDown?.(event);
    ctx.onChange?.(ctx.isOpen ? false : true);
    ctx.onOpen?.();
  };

  return React.cloneElement(children, {
    ref: refs,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    className: clxss,
    ...otherProps,
  });
};

export type DropdownTargetComponent = React.ForwardRefExoticComponent<DropdownTargetProps>;
export const DropdownTarget = React.forwardRef(_DropdownTarget) as DropdownTargetComponent;
DropdownTarget.displayName = '@v2/Dropdown.Target';
