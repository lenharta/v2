import clsx from 'clsx';
import { Group } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ControlTrackProps } from '../types';

type ControlTrackFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: ControlTrackProps;
}>;

const ControlTrack = createFactory<ControlTrackFactory>((props, ref) => {
  const { orientation, children, className, ...forwardedProps } = props;
  return (
    <Group
      ref={ref}
      className={clsx('v2-control-track', className)}
      orientation={orientation}
      {...forwardedProps}
    >
      {children}
    </Group>
  );
});

ControlTrack.displayName = '@v2/Control.Track';
export { ControlTrack };
