import { Group } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ControlTrackProps } from '../Control.types';

type ControlTrackFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: ControlTrackProps;
}>;

const ControlTrack = createFactory<ControlTrackFactory>((props, ref) => {
  const { orientation, children, ...forwardedProps } = props;
  return (
    <Group ref={ref} className="v2-control-track" orientation={orientation} {...forwardedProps}>
      {children}
    </Group>
  );
});

ControlTrack.displayName = '@v2/Control.Track';
export { ControlTrack };
