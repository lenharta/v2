import clsx from 'clsx';
import { Core } from '@/types';
import { Icon } from '@/core/components';
import { Component } from '@/factory';
import { createEventCallback, createKeyDownGroup } from '@/utils';

export type ControlSegmentFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.ControlSegmentProps;
  element: 'button';
}>;

export const ControlSegment = Component<ControlSegmentFactory>(
  (
    {
      refs,
      item,
      value,
      variant,
      trackRef,
      className,
      trapFocus,
      orientation,
      setElementRefs,
      onItemChange,
      update,
      ...props
    },
    ref
  ) => {
    const iconPosition = item.iconPosition || 'end';

    const classNames = clsx('v2-control-segment', `v2-control-segment--${variant}`, className);

    const onClick = createEventCallback(props.onClick, (event) => {
      onItemChange(event.currentTarget.value);
      update(refs[item.value]!, trackRef.current!);
    });

    const onKeyDown = createKeyDownGroup({
      loop: trapFocus,
      orientation: orientation,
      parentSelector: 'data-control-track',
      childSelector: 'data-control-segment',
      onKeyDown: (event) => {
        if (event.code === 'Enter') {
          onItemChange(event.currentTarget.value);
          update(refs[item.value]!, trackRef.current!);
        }
      },
    });

    return (
      <button
        {...props}
        data-control-segment
        data-selected={!!(item.value === value)}
        className={classNames}
        onKeyDown={onKeyDown}
        onClick={onClick}
        ref={ref}
      >
        <div className="v2-control-segment-layout">
          {item.icon && iconPosition === 'start' && (
            <div className="v2-control-content" data-position="start">
              <Icon {...item.icon} />
            </div>
          )}

          <div className="v2-control-label">{item.label}</div>

          {item.icon && iconPosition === 'end' && (
            <div className="v2-control-content" data-position="end">
              <Icon {...item.icon} />
            </div>
          )}
        </div>
      </button>
    );
  }
);

ControlSegment.displayName = '@v2/Control.Segment';
