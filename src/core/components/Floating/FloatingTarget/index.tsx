import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { useMergeRefs } from '@/hooks';
import { createEventCallback } from '@/utils';
import { useFloatingContext } from '../FloatingContext';

export type FloatingTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.FloatingTargetProps;
  element: 'button';
}>;

export const FloatingTarget = Component<FloatingTargetFactory>(
  ({ children, popupType = 'dialog', refProp = 'ref', ...props }, ref) => {
    if (!React.isValidElement(children)) {
      throw new Error(
        'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
      );
    }

    const forwardedProps: any = props;

    const ctx = useFloatingContext();
    const refs = useMergeRefs(ctx.reference, (children as any).ref, ref);

    const className = clsx(
      props.className,
      forwardedProps.className,
      (children as any).props.className
    );

    const contextProps = ctx
      ? {
          id: forwardedProps.id || ctx.getTargetId(),
          'aria-haspopup': forwardedProps['aria-haspopup'] || popupType,
          'aria-expanded': forwardedProps['aria-expanded'] || ctx.isOpen,
          'aria-controls': forwardedProps['aria-controls'] || ctx.getBoxId(),

          ...(ctx.behavior === 'click'
            ? {
                onClick: createEventCallback(forwardedProps.onClick, (event) => {
                  if (!ctx.disabled && !forwardedProps['aria-readonly']) {
                    event.stopPropagation();
                    ctx.onChange?.(ctx.isOpen);
                  }
                }),
              }
            : {}),
          ...(ctx.behavior === 'hover'
            ? {
                onMouseDown: createEventCallback(forwardedProps.onMouseDown, (event) => {
                  if (!ctx.disabled && !forwardedProps['aria-readonly']) {
                    event.stopPropagation();
                    forwardedProps.onClick?.();
                  }
                }),
                onMouseEnter: createEventCallback(forwardedProps.onMouseEnter, (event) => {
                  if (!ctx.disabled && !forwardedProps['aria-readonly']) {
                    event.stopPropagation();
                    ctx.onChange?.(ctx.isOpen);
                  }
                }),
                onMouseLeave: createEventCallback(forwardedProps.onMouseLeave, (event) => {
                  if (!ctx.disabled && !forwardedProps['aria-readonly']) {
                    event.stopPropagation();
                    ctx.onChange?.(ctx.isOpen);
                  }
                }),
              }
            : {}),
        }
      : {
          id: forwardedProps.id,
          'aria-haspopup': forwardedProps['aria-haspopup'] || popupType,
          'aria-expanded': forwardedProps['aria-expanded'],
          'aria-controls': forwardedProps['aria-controls'],
        };

    return React.cloneElement(children, {
      className,
      [refProp!]: refs,
      ...props,
      ...contextProps,
      ...forwardedProps,
    });
  }
);

FloatingTarget.displayName = '@v2/Floating.Target';
