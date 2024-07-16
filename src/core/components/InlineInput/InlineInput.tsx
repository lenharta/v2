import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { Text, Label, InlineInputProps } from '@/core';

type InlineInputFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: InlineInputProps;
}>;

const InlineInput = createPolymorphicFactory<InlineInputFactory>((props, ref) => {
  const {
    error,
    label,
    message,
    checked,
    selected,
    disabled,
    readOnly,
    children,
    className,
    component: Component = 'div',
    ...forwardedProps
  } = props;

  return (
    <div
      ref={ref}
      className={clsx('v2-inline-input', className)}
      data-selected={!!selected || undefined}
      data-disabled={!!disabled || undefined}
      data-readonly={!!readOnly || undefined}
      data-checked={!!checked || undefined}
      {...forwardedProps}
    >
      <div className="v2-inline-input-layout">
        {children}

        <div className="v2-inline-input-content">
          <Label className="v2-inline-input-label">{label}</Label>
          {error && <Text className="v2-inline-input-error">{error}</Text>}
          {message && <Text className="v2-inline-input-message">{message}</Text>}
        </div>
      </div>
    </div>
  );
});

InlineInput.displayName = '@v2/InlineInput';
export { InlineInput };
