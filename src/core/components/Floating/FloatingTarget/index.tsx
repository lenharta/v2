import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core';
import { Factory } from '@/types';
import { useMergeRefs } from '@/hooks';
import { createEventCallback } from '@/utils';
import { FloatingTargetProps } from '../types';
import { useFloatingContext } from '../Floating.context';

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

  const className = clsx(
    otherProps.className,
    forwardedProps.className,
    (children as any).props.className
  );

  const contextProps = ctx
    ? {
        id: forwardedProps.id || ctx.getTargetId(),
        'aria-haspopup': forwardedProps['aria-haspopup'] || popupType,
        'aria-expanded': forwardedProps['aria-expanded'] || ctx.isOpen,
        'aria-controls': forwardedProps['aria-controls'] || ctx.getBoxId(),
        onClick: createEventCallback(forwardedProps.onClick, (event) => {
          event.stopPropagation();
          ctx.onChange(ctx.isOpen);
        }),
      }
    : {
        id: forwardedProps.id,
        'aria-haspopup': forwardedProps['aria-haspopup'] || popupType,
        'aria-expanded': forwardedProps['aria-expanded'],
        'aria-controls': forwardedProps['aria-controls'],
        onClick: forwardedProps.onClick,
      };

  return React.cloneElement(children, {
    className,
    [refProp!]: refs,
    ...otherProps,
    ...contextProps,
    ...forwardedProps,
  });
});

FloatingTarget.displayName = '@v2/Floating.Target';
export { FloatingTarget, type FloatingTargetProps };
