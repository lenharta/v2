import clsx from 'clsx';
import { Text } from '../Text';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '../UnstyledButton';
import { Label } from '../Label';

interface InlineInputProps {
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  label?: string | undefined;
  message?: string | undefined;
  validation?: 'idle' | 'error' | 'warning' | undefined;
}

type InlineInputFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: InlineInputProps;
}>;

const InlineInput = factory<InlineInputFactory>((props, ref) => {
  const { label, message, disabled, readOnly, className, children, ...forwardedProps } = props;
  return (
    <UnstyledButton
      {...forwardedProps}
      aria-readonly={readOnly}
      aria-disabled={disabled}
      data-disabled={disabled}
      data-readonly={readOnly}
      className={clsx('v2-inline-input', className)}
      ref={ref}
    >
      <span>
        {children}
        <div>
          {label && <Label>{label}</Label>}
          {message && <Text>{message}</Text>}
        </div>
      </span>
    </UnstyledButton>
  );
});

InlineInput.displayName = '@v2/InlineInput';
export { InlineInput, type InlineInputProps };
