import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { RadioGroup } from './Group';
import { InlineInput, InlineInputProps } from '../InlineInput';

interface RadioProps extends InlineInputProps {
  checked?: boolean | undefined;
  indeterminate?: boolean | undefined;
}

type RadioFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: RadioProps;
  comps: {
    Group: typeof RadioGroup;
  };
}>;

const Radio = factory<RadioFactory>((props, ref) => {
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
      className={clsx('v2-radio', className)}
      validation={validation}
      readOnly={readOnly}
      disabled={disabled}
      message={message}
      label={label}
      ref={ref}
    ></InlineInput>
  );
});

Radio.displayName = '@v2/Radio';
Radio.Group = RadioGroup;
export { Radio, type RadioProps };
