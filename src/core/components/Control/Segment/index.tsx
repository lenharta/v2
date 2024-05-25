import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '../../UnstyledButton';
import { createKeyDownGroup } from '@/core/utils';
import { createEventCallback } from '@/utils';
import { ControlSegmentProps } from '../Control.types';

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

  return (
    <UnstyledButton
      {...forwardedProps}
      key={item.value}
      ref={ref}
      data-control-segment
      value={item.value}
      className={css.segment}
      aria-label={item.label}
      data-disabled={item.disabled}
      aria-disabled={item.disabled}
      data-selected={item.value === value ? true : undefined}
      aria-selected={item.value === value ? true : undefined}
      onClick={createEventCallback(forwardedProps.onClick, (event) => {
        onItemChange(event.currentTarget.value);
        update(refs[item.value]!, trackRef.current!);
      })}
      onKeyDown={createKeyDownGroup({
        childSelector: '[data-control-segment]',
        parentSelector: '[data-control-track]',
        orientation: orientation,
        loop: trapFocus,
        onKeyDown: (event) => {
          if (event.code === 'Enter') {
            onItemChange(event.currentTarget.value);
            update(refs[item.value]!, trackRef.current!);
          }
        },
      })}
    >
      <span className={css.segmentInner}>
        <div className={css.segmentLabel}>{item.label}</div>
      </span>
    </UnstyledButton>
  );
});

ControlSegment.displayName = '@v2/Control.Segment';
export { ControlSegment, type ControlSegmentProps };
