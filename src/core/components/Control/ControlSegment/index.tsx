import clsx from 'clsx';
import { Core } from '@/types';
import { Icon, Label } from '@/core/components';
import { Component } from '@/factory';
import { createEventCallback, createKeyDownGroup } from '@/utils';

export type ControlSegmentFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.ControlSegmentProps;
  element: 'button';
  excluded: 'onChange';
}>;

export const ControlSegment = Component<ControlSegmentFactory>(
  (
    {
      refs,
      item,
      grow,
      size,
      value,
      variant,
      trackRef,
      className,
      trapFocus,
      orientation,
      setElementRefs,
      onChange,
      update,
      ...props
    },
    ref
  ) => {
    const iconPosition = item.iconPosition || 'end';

    const onClick = createEventCallback(props.onClick, (event) => {
      onChange(event.currentTarget.value);
      update(refs[item.value]!, trackRef.current!);
    });

    const onKeyDown = createKeyDownGroup({
      loop: trapFocus,
      orientation: orientation,
      parentSelector: 'data-control-track',
      childSelector: 'data-control-segment',
      onKeyDown: (event) => {
        if (event.code === 'Enter') {
          onChange(event.currentTarget.value);
          update(refs[item.value]!, trackRef.current!);
        }
      },
    });

    return (
      <button
        {...props}
        ref={ref}
        onClick={onClick}
        onKeyDown={onKeyDown}
        data-grow={grow || undefined}
        data-selected={!!(item.value === value)}
        data-control-segment
        className={clsx(
          'v2-control-segment',
          `v2-control-segment--${size || 'sm'}`,
          `v2-control-segment--${variant || 'default'}`,
          className
        )}
      >
        <div className="v2-control-segment-layout">
          {item.icon && iconPosition === 'start' && (
            <div className="v2-control-segment-content" data-position="start">
              <Icon {...item.icon} />
            </div>
          )}

          <Label className="v2-control-segment-label">{item.label}</Label>

          {item.icon && iconPosition === 'end' && (
            <div className="v2-control-segment-content" data-position="end">
              <Icon {...item.icon} />
            </div>
          )}
        </div>
      </button>
    );
  }
);

ControlSegment.displayName = '@v2/Control.Segment';
