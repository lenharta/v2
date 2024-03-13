import clsx from 'clsx';
import * as React from 'react';
import { useMergeRefs } from '@/hooks';
import { useFloatingCTX } from '../context';
import { createEventCallback } from '@/common/utils';

type TargetElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
type TargetRefProps<E extends HTMLElement> = React.RefAttributes<E>;

export interface FloatingTargetProps {
  refProp?: string;
  children: React.ReactElement;
  popupType?: React.AriaAttributes['aria-haspopup'];
}

const _FloatingTarget = <T extends React.ElementType, E extends HTMLElement>(
  props: FloatingTargetProps & TargetElementProps<T> & TargetRefProps<E>,
  ref: React.ForwardedRef<E>
) => {
  const { children, popupType = 'dialog', refProp = 'ref', ...otherProps } = props;

  const ctx = useFloatingCTX();
  const refs = useMergeRefs(ref, ctx.reference);
  const forwardedProps = otherProps;

  const accessibleProps = {
    'aria-haspopup': popupType,
    'aria-expanded': ctx.opened,
    'aria-controls': ctx.getBoxId(),
  };

  return React.cloneElement(children, {
    ...forwardedProps,
    ...accessibleProps,
    [refProp]: refs,
    className: clsx(forwardedProps.className, children.props.className),
    onClick: createEventCallback(forwardedProps?.onClick, () => {}),
  });
};

export const FloatingTarget: <T extends React.ElementType, E extends HTMLElement>(
  props: FloatingTargetProps & TargetElementProps<T> & TargetRefProps<E>
) => React.ReactNode = React.forwardRef(_FloatingTarget);
