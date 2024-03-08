import clsx from 'clsx';
import * as React from 'react';
import { useDropdownCTX } from '../context';
import { useMergeRefs } from '@/hooks';
import { createEventCallback } from '@/common/utils';

type TargetElementProps<T> = T extends React.ElementType
  ? React.ComponentPropsWithoutRef<T>
  : never;

type TargetReferenceAttributeProps<T> = T extends React.ElementType
  ? React.RefAttributes<T>
  : never;

type TargetBaseProps<T> = T extends React.ElementType
  ? TargetElementProps<T> & TargetReferenceAttributeProps<T>
  : never;

type TargetProps<T extends React.ElementType = React.ElementType> = TargetBaseProps<T> & {
  children: React.ReactElement;
  refKey?: string;
};

function _DropdownTarget<T extends React.ElementType>(
  props: TargetProps<T>,
  ref: React.ForwardedRef<T>
) {
  const { children, refKey = 'ref', ...otherProps } = props;

  if (!React.isValidElement(children)) {
    console.error('Dropdown Target must be a valid element, does not accept a primitive value.');
    return null;
  }

  const ctx = useDropdownCTX();
  const refs = useMergeRefs(ref, ctx.targetRef);

  const onOpenChange = () => {
    if (ctx.isOpen) {
      ctx.onChange?.(false);
      ctx.onClose?.();
    } else {
      ctx.onChange?.(true);
      ctx.onOpen?.();
    }
  };

  return React.cloneElement<any>(children, {
    ...otherProps,
    onClick: createEventCallback(otherProps.onClick, onOpenChange),
    onKeyDown: createEventCallback(otherProps.onKeyDown, onOpenChange),
    className: 'dropdown-target',
    [refKey]: refs,
  });
}

export type DropdownTargetComponent = React.ForwardRefExoticComponent<TargetProps>;
export const DropdownTarget = React.forwardRef(_DropdownTarget) as DropdownTargetComponent;
DropdownTarget.displayName = '@v2/Dropdown.Target';
