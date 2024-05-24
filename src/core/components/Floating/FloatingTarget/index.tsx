import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useMergeRefs } from '@/hooks';
import { useFloatingContext } from '../Floating.context';
import { FloatingTargetProps } from '../Floating.types';
import { createEventCallback } from '@/utils';

type FloatingTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: FloatingTargetProps;
}>;

const FloatingTarget = factory<FloatingTargetFactory>((props, ref) => {
  const { children, popupType = 'dialog', refProp = 'ref', ...otherProps } = props;

  if (!React.isValidElement(children)) {
    throw new Error(
      'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const forwardedProps: any = otherProps;
  const ctx = useFloatingContext();
  const refs = useMergeRefs(ctx.reference, (children as any).ref, ref);

  return React.cloneElement(children, {
    ...forwardedProps,
    [refProp!]: refs,
    id: ctx.getTargetId(),
    'aria-haspopup': forwardedProps['aria-haspopup'] || popupType,
    'aria-expanded': forwardedProps['aria-expanded'] || ctx.isOpen,
    'aria-controls': forwardedProps['aria-controls'] || ctx.getBoxId(),
    onClick: createEventCallback(otherProps.onClick, (event) => {
      event.stopPropagation();
      ctx.onChange(ctx.isOpen);
    }),
  });
});

FloatingTarget.displayName = '@v2/Floating.Target';
export { FloatingTarget, type FloatingTargetProps };
