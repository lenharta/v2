import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton } from '@/core';
import { createEventCallback, createKeyDownGroup } from '@/utils';
import { ControlSegmentProps } from '../Control.types';
import { ATTRIBUTES } from '../Control';

type ControlSegmentFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ControlSegmentProps;
  omits: 'children';
}>;

const ControlSegment = createFactory<ControlSegmentFactory>((props, ref) => {
  const {
    refs,
    item,
    value,
    trackRef,
    trapFocus,
    orientation,
    update,
    onItemChange,
    setElementRefs,
    ...forwardedProps
  } = props;

  const onClick = createEventCallback(forwardedProps.onClick, (event) => {
    onItemChange(event.currentTarget.value);
    update(refs[item.value]!, trackRef.current!);
  });

  const onKeyDown = createKeyDownGroup({
    loop: trapFocus,
    orientation: orientation,
    parentSelector: ATTRIBUTES.parent.key,
    childSelector: ATTRIBUTES.child.key,
    onKeyDown: (event) => {
      if (event.code === 'Enter') {
        onItemChange(event.currentTarget.value);
        update(refs[item.value]!, trackRef.current!);
      }
    },
  });

  return (
    <UnstyledButton
      ref={ref}
      value={item.value}
      label={item.label}
      readOnly={item.readOnly}
      disabled={item.disabled}
      selected={item.value === value}
      className="v2-control-segment"
      onKeyDown={onKeyDown}
      onClick={onClick}
      {...ATTRIBUTES.child.prop}
      {...forwardedProps}
    >
      <span className="v2-control-segment-inner">
        <div className="v2-control-segment-label">{item.label}</div>
      </span>
    </UnstyledButton>
  );
});

ControlSegment.displayName = '@v2/Control.Segment';
export { ControlSegment };
