import { Box, factory } from '@/core';
import { Factory } from '@/types';
import { ControlTrackProps } from '../types';

type ControlTrackFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: ControlTrackProps;
}>;

const ControlTrack = factory<ControlTrackFactory>((props, ref) => {
  const { className, orientation, children, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={className}
      ref={ref}
    >
      {children}
    </Box>
  );
});

ControlTrack.displayName = '@v2/Control.Track';
export { ControlTrack };
