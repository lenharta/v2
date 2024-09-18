import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Floating } from '@/core';
import { Component } from '@/factory';
import { createKeyDownRefScope, mergeRefs } from '@/utils';

export type SelectListFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.SelectBoxProps;
  element: 'div';
}>;

export const SelectList = Component<SelectListFactory>(
  ({ size, variant, children, className, onKeyDownCapture, ...props }, ref) => {
    const listRef = React.useRef<HTMLDivElement>(null);

    return (
      <Floating.Box>
        <div
          {...props}
          ref={mergeRefs(ref, listRef)}
          role="listbox"
          onKeyDownCapture={createKeyDownRefScope(listRef, {
            onKeyDown: (event) => onKeyDownCapture?.(event),
            orientation: 'vertical',
            loop: false,
          })}
          className={clsx(
            'v2-select-list',
            `v2-select-list--${size || 'sm'}`,
            `v2-select-list--${variant || 'default'}`,
            className
          )}
        >
          {children}
        </div>
      </Floating.Box>
    );
  }
);

SelectList.displayName = '@v2/Select.List';
