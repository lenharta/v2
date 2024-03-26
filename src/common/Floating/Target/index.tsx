import clsx from 'clsx';
import * as React from 'react';
import { createEventCallback, mergeProps } from '@/utils';
import { useMergeRefs } from '@/hooks';
import { useFloatingCTX } from '../context';
import { isReactElement } from '@/common/utils';

type TargetElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
type TargetRefProps<E extends HTMLElement> = React.RefAttributes<E>;

export interface FloatingTargetProps {
  refProp?: string;
  children: React.ReactElement;
  popupType?: React.AriaAttributes['aria-haspopup'];
}

const defaultProps: any = {
  popupType: 'dialog',
  refProp: 'ref',
};

const _FloatingTarget = <T extends React.ElementType, E extends HTMLElement>(
  props: FloatingTargetProps & TargetElementProps<T> & TargetRefProps<E>,
  ref: React.ForwardedRef<E>
) => {
  const { children, popupType, refProp, ...otherProps } = mergeProps(defaultProps, props);

  if (!isReactElement(children)) {
    throw new Error(
      'Floating.Target children should be an element or a component that accepts ref. Fragments, strings, numbers are not supported.'
    );
  }

  const ctx = useFloatingCTX();
  const refs = useMergeRefs(ctx.reference, (children as any).ref, ref);
  const forwardedProps: any = otherProps;

  const accessibleProps = {
    'aria-haspopup': popupType,
    'aria-expanded': ctx.opened,
    'aria-controls': ctx.getBoxId(),
    id: ctx.getTargetId(),
  };

  return React.cloneElement(children, {
    ...forwardedProps,
    ...accessibleProps,
    [refProp!]: refs,
    className: clsx(forwardedProps.className, children.props.className),
    onClick: createEventCallback(forwardedProps?.onClick, ctx.onToggle),
  });
};

export const FloatingTarget = React.forwardRef(_FloatingTarget) as React.ForwardRefExoticComponent<
  FloatingTargetProps & TargetElementProps<any> & TargetRefProps<any>
>;

FloatingTarget.displayName = '@v2/Floating.Target';
