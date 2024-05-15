import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxGroup } from './Group';
import { InlineInput, InlineInputProps } from '../InlineInput';

interface CheckboxProps extends InlineInputProps {
  checked?: boolean | undefined;
  indeterminate?: boolean | undefined;
}

type CheckboxFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: CheckboxProps;
  comps: {
    Group: typeof CheckboxGroup;
  };
}>;

const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const {
    label,
    message,
    readOnly,
    disabled,
    className,
    validation = 'idle',
    ...forwardedProps
  } = props;

  return (
    <InlineInput
      {...forwardedProps}
      className={clsx('v2-checkbox', className)}
      validation={validation}
      disabled={disabled}
      readOnly={readOnly}
      message={message}
      label={label}
      ref={ref}
    ></InlineInput>
  );
});

Checkbox.displayName = '@v2/Checkbox';
Checkbox.Group = CheckboxGroup;
export { Checkbox, type CheckboxProps };
