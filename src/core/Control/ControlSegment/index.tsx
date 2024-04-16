import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { createKeyDownGroup } from '@/core/utils';
import { createEventCallback } from '@/utils';

interface ControlSegmentProps {
  css: { label: string; item: string };
  refs: Record<string, HTMLElement | null>;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onUpdate: (target: HTMLElement | null, parent: HTMLElement | null) => void;
  orientation: Core.Orientation;
  isSelected?: boolean | undefined;
}

export type ControlSegmentFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'onChange' | 'children';
  props: ControlSegmentProps;
}>;

export const ControlSegment = factory<ControlSegmentFactory>((props, ref) => {
  const {
    css,
    refs,
    label,
    value,
    isSelected,
    orientation,
    onUpdate,
    onChange,
    onKeyDown,
    onClick,
  } = props;

  return (
    <button
      ref={ref}
      value={value}
      className={css.item}
      data-selected={isSelected || undefined}
      aria-selected={isSelected || undefined}
      onKeyDown={createKeyDownGroup({ onKeyDown, orientation })}
      onClick={createEventCallback(onClick, (event) => {
        event.stopPropagation();
        onChange(event.currentTarget.value);
        onUpdate(refs.target!, refs.parent!);
      })}
    >
      <span className={css.label}>{label}</span>
    </button>
  );
});
