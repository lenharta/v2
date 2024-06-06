import { Factory } from '@/types';
import { UnstyledButton } from '../../UnstyledButton';
import { createEventCallback } from '@/utils';
import { ControlSegmentProps } from '../types';
import { createKeyDownGroup, factory } from '@/core';

type ControlSegmentFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ControlSegmentProps;
  omits: 'children';
}>;

const ControlSegment = factory<ControlSegmentFactory>((props, ref) => {
  const {
    css,
    refs,
    item,
    value,
    trackRef,
    trapFocus,
    orientation,
    setElementRefs,
    onItemChange,
    update,
    ...forwardedProps
  } = props;

  const onClick = createEventCallback(forwardedProps.onClick, (event) => {
    onItemChange(event.currentTarget.value);
    update(refs[item.value]!, trackRef.current!);
  });

  const onKeyDown = createKeyDownGroup({
    loop: trapFocus,
    orientation: orientation,
    childSelector: '[data-control-segment]',
    parentSelector: '[data-control-track]',
    onKeyDown: (event) => {
      if (event.code === 'Enter') {
        onItemChange(event.currentTarget.value);
        update(refs[item.value]!, trackRef.current!);
      }
    },
  });

  return (
    <UnstyledButton
      {...forwardedProps}
      key={item.value}
      ref={ref}
      value={item.value}
      className={css.segment}
      aria-label={item.label}
      aria-disabled={item.disabled}
      aria-selected={item.value === value ? true : undefined}
      data-selected={item.value === value ? true : undefined}
      data-disabled={item.disabled}
      data-control-segment
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      <span className={css.segmentInner}>
        <div className={css.segmentLabel}>{item.label}</div>
      </span>
    </UnstyledButton>
  );
});

ControlSegment.displayName = '@v2/Control.Segment';
export { ControlSegment, type ControlSegmentProps };
