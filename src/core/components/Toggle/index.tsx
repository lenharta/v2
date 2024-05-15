import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ToggleGroup } from './Group';
import { InlineInput, InlineInputProps } from '../InlineInput';

interface ToggleProps extends InlineInputProps {
  checked?: boolean | undefined;
  indeterminate?: boolean | undefined;
}

type ToggleFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ToggleProps;
  comps: {
    Group: typeof ToggleGroup;
  };
}>;

const Toggle = factory<ToggleFactory>((props, ref) => {
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
      className={clsx('v2-toggle', className)}
      validation={validation}
      disabled={disabled}
      readOnly={readOnly}
      message={message}
      label={label}
      ref={ref}
    ></InlineInput>
  );
});

Toggle.displayName = '@v2/Toggle';
Toggle.Group = ToggleGroup;
export { Toggle, type ToggleProps };
