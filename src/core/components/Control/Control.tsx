import * as React from 'react';
import { Core } from '@/types';
import { parseItemData } from '@/utils';
import { ControlTrack } from './ControlTrack';
import { ControlThumb } from './ControlThumb';
import { ControlSegment } from './ControlSegment';
import { useControlPosition } from './use-control-position';

type ControlFactory = React.FC<Core.ControlProps> & {
  Thumb: typeof ControlThumb;
  Track: typeof ControlTrack;
  Segment: typeof ControlSegment;
};

export const Control: ControlFactory = (props) => {
  const { size, grow, items, value, variant, trapFocus = false, orientation, onChange } = props;

  const data = React.useMemo(() => parseItemData(items) as Core.ItemParsed[], [items]);

  const { refs, thumbRef, trackRef, setElementRefs, update } = useControlPosition({
    initialPosition: { height: 0, width: 0, left: 0, top: 0 },
    currentValue: value,
    orientation,
  });

  console.log(refs, thumbRef, trackRef, setElementRefs, update);

  return (
    <Control.Track
      size={size}
      grow={grow}
      ref={trackRef}
      variant={variant}
      orientation={orientation}
      data-control-track
    >
      {data.map((item) => (
        <Control.Segment
          key={item.value}
          ref={(node) => setElementRefs(node, item.value)}
          refs={refs}
          size={size}
          grow={grow}
          item={item}
          value={value}
          update={update}
          variant={variant}
          trackRef={trackRef}
          trapFocus={trapFocus}
          orientation={orientation}
          setElementRefs={setElementRefs}
          onChange={() => onChange(item.value)}
        />
      ))}

      <Control.Thumb
        grow={grow}
        size={size}
        ref={thumbRef}
        variant={variant}
        transitionEasing="ease"
        transitionDuration="250ms"
        transitionProperty="transform"
      />
    </Control.Track>
  );
};

Control.Thumb = ControlThumb;
Control.Track = ControlTrack;
Control.Segment = ControlSegment;
Control.displayName = '@v2/Control';
