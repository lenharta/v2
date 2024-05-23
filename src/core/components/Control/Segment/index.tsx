import clsx from 'clsx';
import { Label } from '@/core/components/Label';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { UnstyledButton } from '@/core/components/UnstyledButton';
import { createKeyDownGroup } from '@/core/utils';
import { createEventCallback } from '@/utils';

interface ControlSegmentProps extends Core.ItemParsed {
  orientation?: Core.Orientation | undefined;
  selected?: boolean | undefined;
  refs: Record<string, HTMLElement | null>;
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onUpdate: (target: HTMLElement | null, parent: HTMLElement | null) => void;
}

type ControlSegmentFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ControlSegmentProps;
  omits: 'onChange' | 'children';
}>;

const ControlSegment = factory<ControlSegmentFactory>((props, ref) => {
  const {
    refs,
    value,
    label,
    disabled,
    selected,
    className,
    orientation,
    onClick,
    onUpdate,
    onChange,
    onKeyDown,
    ...forwardedProps
  } = props;

  return (
    <UnstyledButton
      {...forwardedProps}
      ref={ref}
      value={value}
      className={clsx('v2-control-segment', className)}
      data-selected={selected || undefined}
      data-disabled={disabled}
      aria-selected={selected || undefined}
      aria-disabled={disabled}
      onKeyDown={createKeyDownGroup({ onKeyDown, orientation })}
      onClick={createEventCallback(onClick, (event) => {
        event.stopPropagation();
        onChange(event);
        onUpdate(refs.target!, refs.parent!);
      })}
    >
      <span className="v2-control-segment-inner">
        <Label component="div">{label}</Label>
      </span>
    </UnstyledButton>
  );
});

ControlSegment.displayName = '@v2/Control.Segment';
export { ControlSegment, type ControlSegmentProps };
