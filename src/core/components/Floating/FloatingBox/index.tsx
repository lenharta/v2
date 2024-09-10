import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Transition } from '@/core';
import { useMergeRefs } from '@/hooks';
import { useFloatingContext } from '../FloatingContext';

export type FloatingBoxFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.FloatingBoxProps;
  element: 'div';
}>;

export const FloatingBox = Component<FloatingBoxFactory>(
  ({ className, style, children, ...props }, ref) => {
    const ctx = useFloatingContext();
    const refs = useMergeRefs(ref, ctx.floating);

    if (ctx.disabled) return null;

    const contextProps = ctx
      ? {
          id: ctx.getBoxId(),
          'aria-labelledby': ctx.getBoxId(),
        }
      : {};

    const contextStyles = ctx
      ? {
          top: ctx.y ?? 0,
          left: ctx.x ?? 0,
          width: ctx.width === 'target' ? undefined : (ctx.width as React.CSSProperties['width']),
          zIndex: ctx.zIndex,
        }
      : {};

    return (
      <Transition {...ctx.transitionProps} mounted={ctx.isOpen}>
        {(transitionStyles) => (
          <div
            {...props}
            {...contextProps}
            ref={refs}
            role="dialog"
            tabIndex={-1}
            style={{
              ...style,
              ...contextStyles,
              ...transitionStyles,
              position: 'absolute',
              boxSizing: 'border-box',
              padding: 0,
              margin: 0,
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    );
  }
);

FloatingBox.displayName = '@v2/Floating.Box';
