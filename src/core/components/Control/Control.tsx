import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';
import { parseItemData } from '@/core';
import { ControlProps } from './types';
import { ControlThumb } from './Thumb';
import { ControlTrack } from './Track';
import { ControlSegment } from './Segment';
import { useControlPosition } from './use-control-position';

const css = {
  root: 'v2-control',
  track: 'v2-control-track',
  thumb: 'v2-control-thumb',
  segment: 'v2-control-segment',
  segmentInner: 'v2-control-segment-inner',
  segmentLabel: 'v2-control-segment-label',
};

type ControlFactory = React.FC<ControlProps> & {
  Thumb: typeof ControlThumb;
  Track: typeof ControlTrack;
  Segment: typeof ControlSegment;
};

const Control: ControlFactory = (props) => {
  const {
    items,
    value,
    className,
    trapFocus = false,
    orientation = 'horizontal',
    onItemChange,
  } = props;

  const data = React.useMemo(() => parseItemData(items) as Core.ItemParsed[], [items]);

  const { refs, thumbRef, trackRef, setElementRefs, update } = useControlPosition({
    initialPosition: { height: 0, width: 0, left: 0, top: 0 },
    currentValue: value,
  });

  return (
    <div className={clsx(css.root, className)}>
      <Control.Track
        ref={trackRef}
        className={css.track}
        orientation={orientation}
        data-control-track
      >
        {data.map((item) => (
          <Control.Segment
            key={item.value}
            css={css}
            item={item}
            ref={(node) => setElementRefs(node, item.value)}
            refs={refs}
            value={value}
            update={update}
            trackRef={trackRef}
            trapFocus={trapFocus}
            orientation={orientation}
            onItemChange={onItemChange}
            setElementRefs={setElementRefs}
            data-control-segment
          />
        ))}

        <Control.Thumb
          ref={thumbRef}
          className={css.thumb}
          transitionEasing="ease"
          transitionDuration="250ms"
          transitionProperty="transform"
        />
      </Control.Track>
    </div>
  );
};

Control.Track = ControlTrack;
Control.Thumb = ControlThumb;
Control.Segment = ControlSegment;
Control.displayName = '@v2/Control';
export { Control, type ControlProps };
