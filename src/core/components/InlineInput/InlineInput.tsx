import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Text, Label, UnstyledButton, InlineInputProps } from '@/core';

type InlineInputFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: InlineInputProps;
}>;

const InlineInput = createFactory<InlineInputFactory>((props, ref) => {
  const {
    error,
    label,
    message,
    checked,
    disabled,
    readOnly,
    children,
    className,
    ...forwardedProps
  } = props;

  return (
    <UnstyledButton
      ref={ref}
      data-selected={!!checked ? true : undefined}
      data-disabled={!!disabled ? true : undefined}
      data-readonly={!!readOnly ? true : undefined}
      className={clsx('v2-inline-input', className)}
      {...forwardedProps}
    >
      <div className="v2-inline-input-indicator">{children}</div>

      <div className="v2-inline-input-content">
        <Label className="v2-inline-input-label">{label}</Label>
        {error && <Text className="v2-inline-input-error">{error}</Text>}
        {message && <Text className="v2-inline-input-message">{message}</Text>}
      </div>
    </UnstyledButton>
  );
});

InlineInput.displayName = '@v2/InlineInput';
export { InlineInput };
