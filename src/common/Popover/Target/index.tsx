import * as React from 'react';
import { mergeProps } from '@/utils';
import { usePopoverCTX } from '../context';
import { useMergeRefs } from '@/hooks';
import { createEventCallback } from '@/common/utils';
type PopoverTargetElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
type PopoverTargetRefProps<E extends Element> = React.RefAttributes<E>;

export interface PopoverTargetProps {
  children: React.ReactElement;
  refProp?: string;
}

const defaultProps: Partial<PopoverTargetProps> = {
  refProp: 'ref',
};

function _PopoverTarget<T extends React.ElementType, E extends Element>(
  props: PopoverTargetProps & PopoverTargetElementProps<T> & PopoverTargetRefProps<E>,
  ref: React.ForwardedRef<E>
) {
  const { children, refProp, ...otherProps } = props;

  if (!React.isValidElement(children)) {
    console.error('Dropdown Target must be a valid element, does not accept a primitive value.');
    return null;
  }

  const ctx = usePopoverCTX();
  const refs = useMergeRefs(ref, ctx.targetRef);

  const _forwardedProps = otherProps;
  const _props = mergeProps({ refProp }, defaultProps);

  return React.cloneElement(children, {
    ..._forwardedProps,
    [_props.refProp!]: refs,
    onClick: createEventCallback(_forwardedProps?.onClick, ctx.onChange),
    className: 'popover-target',
  });
}

export const PopoverTarget: <T extends React.ElementType, E extends Element>(
  props: PopoverTargetProps & PopoverTargetElementProps<T> & PopoverTargetRefProps<E>
) => React.ReactNode = React.forwardRef(_PopoverTarget);
