import clsx from 'clsx';
import { Core } from '@/types';
import { Group } from '@/core';
import { Component } from '@/factory';

export type ControlTrackFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ControlTrackProps;
  element: 'div';
}>;

const ControlTrack = Component<ControlTrackFactory>(
  ({ gap, variant = 'default', children, className, orientation, ...props }, ref) => {
    return (
      <Group
        {...props}
        orientation={orientation}
        className={clsx('v2-control-track', `v2-control-track--${variant}`, className)}
        ref={ref}
      >
        {children}
      </Group>
    );
  }
);

ControlTrack.displayName = '@v2/Control.Track';
export { ControlTrack };
