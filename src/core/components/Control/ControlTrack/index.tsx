import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createKeyDownRefScope, mergeRefs } from '@/utils';
import React from 'react';

export type ControlTrackFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ControlTrackProps;
  element: 'div';
}>;

const ControlTrack = Component<ControlTrackFactory>(
  (
    { grow, size, gap, variant, children, className, orientation = 'horizontal', ...props },
    ref
  ) => {
    const elementRef = React.useRef<HTMLDivElement>(null);
    return (
      <div
        {...props}
        ref={mergeRefs(ref, elementRef)}
        aria-orientation={orientation}
        data-orientation={orientation}
        onKeyDownCapture={createKeyDownRefScope(elementRef, { orientation })}
        data-grow={grow || undefined}
        data-control-track
        className={clsx(
          'v2-control-track',
          `v2-control-track--${size || 'sm'}`,
          `v2-control-track--${variant || 'default'}`,
          className
        )}
      >
        {children}
      </div>
    );
  }
);

ControlTrack.displayName = '@v2/Control.Track';
export { ControlTrack };
