import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { Icon, UnstyledButton } from '@core';
import { createEventCallback, createKeyDownGroup } from '@utils';
import { ControlSegmentProps } from '../types';
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
    variant,
    trackRef,
    className,
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

  const iconPosition = item.iconPosition || 'end';

  return (
    <UnstyledButton
      ref={ref}
      value={item.value}
      readOnly={item.readOnly}
      disabled={item.disabled}
      selected={!!(item.value === value) || undefined}
      className={clsx('v2-control-segment', `v2-control-segment--${variant}`, className)}
      onKeyDown={onKeyDown}
      onClick={onClick}
      {...ATTRIBUTES.child.prop}
      {...forwardedProps}
    >
      <div className="v2-control-segment-layout">
        {item.icon && iconPosition === 'start' && (
          <div data-position="start">
            <Icon {...item.icon} />
          </div>
        )}

        {item.label}

        {item.icon && iconPosition === 'end' && (
          <div data-position="end">
            <Icon {...item.icon} />
          </div>
        )}
      </div>
    </UnstyledButton>
  );
});

ControlSegment.displayName = '@v2/Control.Segment';
export { ControlSegment };
