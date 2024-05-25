import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ControlTrackProps } from '../Control.types';

type ControlTrackFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: ControlTrackProps;
}>;

const ControlTrack = factory<ControlTrackFactory>((props, ref) => {
  const { className, orientation, children, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={className}
      ref={ref}
    >
      {children}
    </div>
  );
});

ControlTrack.displayName = '@v2/Control.Track';
export { ControlTrack };
