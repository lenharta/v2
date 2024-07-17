import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@types';
import { parseItemData } from '@utils';
import { ControlProps } from './types';
import { ControlTrack } from './ControlTrack';
import { ControlThumb } from './ControlThumb';
import { ControlSegment } from './ControlSegment';
import { useControlPosition } from './use-control-position';

const ATTRIBUTES = {
  parent: { key: '[data-core-control-track]', prop: { 'data-core-control-track': true } },
  child: { key: '[data-core-control-segment]', prop: { 'data-core-control-segment': true } },
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
    variant = 'default',
    className,
    trapFocus = false,
    orientation = 'horizontal',
    defaultValue,
    onItemChange: controlledChange,
  } = props;

  const [uncontrolledValue, uncontrolledChange] = React.useState(defaultValue || items[0].value);

  const data = React.useMemo(() => parseItemData(items) as Core.ItemParsed[], [items]);

  const { refs, thumbRef, trackRef, setElementRefs, update } = useControlPosition({
    initialPosition: { height: 0, width: 0, left: 0, top: 0 },
    currentValue: value || uncontrolledValue,
  });

  const handleChange = React.useCallback(
    (v: string) => {
      if (!controlledChange) return uncontrolledChange(v);
      return controlledChange(v);
    },
    [controlledChange, uncontrolledChange]
  );

  return (
    <div className={clsx('v2-control', `v2-control--${variant}`, className)}>
      <Control.Track
        ref={trackRef}
        variant={variant}
        orientation={orientation}
        {...ATTRIBUTES.parent.prop}
      >
        {data.map((item) => (
          <Control.Segment
            key={item.value}
            ref={(node) => setElementRefs(node, item.value)}
            refs={refs}
            item={item}
            value={value || uncontrolledValue}
            update={update}
            variant={variant}
            trackRef={trackRef}
            trapFocus={trapFocus}
            orientation={orientation}
            onItemChange={handleChange}
            setElementRefs={setElementRefs}
          />
        ))}

        <Control.Thumb
          ref={thumbRef}
          variant={variant}
          transitionEasing="ease"
          transitionDuration="250ms"
          transitionProperty="transform"
        />
      </Control.Track>
    </div>
  );
};

Control.Thumb = ControlThumb;
Control.Track = ControlTrack;
Control.Segment = ControlSegment;
Control.displayName = '@v2/Control';
export { Control, ATTRIBUTES };
