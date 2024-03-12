import * as React from 'react';
import { useMergeRefs } from '@/hooks';
import { usePopoverCTX } from '../context';
import { createEventCallback } from '@/common/utils';

type PopoverTargetElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
type PopoverTargetRefProps<E extends Element> = React.RefAttributes<E>;

export interface PopoverTargetProps {
  children: React.ReactElement;
  refProp?: string;
}

function _PopoverTarget<T extends React.ElementType, E extends Element>(
  props: PopoverTargetProps & PopoverTargetElementProps<T> & PopoverTargetRefProps<E>,
  ref: React.ForwardedRef<E>
) {
  const { children, refProp = 'ref', ...otherProps } = props;

  if (!React.isValidElement(children)) {
    console.error('Dropdown Target must be a valid element, does not accept a primitive value.');
    return null;
  }

  const ctx = usePopoverCTX();
  const refs = useMergeRefs(ref, ctx.targetRef);

  const forwardProps = otherProps;

  return React.cloneElement(children, {
    ...forwardProps,
    [refProp]: refs,
    onClick: createEventCallback(forwardProps?.onClick, ctx.onChange),
    className: 'popover-target',
  });
}

export const PopoverTarget: <T extends React.ElementType, E extends Element>(
  props: PopoverTargetProps & PopoverTargetElementProps<T> & PopoverTargetRefProps<E>
) => React.ReactNode = React.forwardRef(_PopoverTarget);
